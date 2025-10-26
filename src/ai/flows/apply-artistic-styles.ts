'use server';
/**
 * @fileOverview Applies artistic styles to food photos using generative AI.
 *
 * - applyArtisticStyle - A function that applies a specified artistic style to a food photo.
 * - ApplyArtisticStyleInput - The input type for the applyArtisticStyle function, including the photo and style.
 * - ApplyArtisticStyleOutput - The return type for the applyArtisticStyle function, providing the styled photo.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const ApplyArtisticStyleInputSchema = z.object({
  photoDataUri: z
    .string()
    .describe(
      "A photo of food, as a data URI that must include a MIME type and use Base64 encoding. Expected format: 'data:<mimetype>;base64,<encoded_data>'."
    ),
  style: z.string().describe('The artistic style to apply to the photo.'),
});
export type ApplyArtisticStyleInput = z.infer<typeof ApplyArtisticStyleInputSchema>;

const ApplyArtisticStyleOutputSchema = z.object({
  styledPhotoDataUri: z
    .string()
    .describe('The data URI of the photo with the artistic style applied.'),
});
export type ApplyArtisticStyleOutput = z.infer<typeof ApplyArtisticStyleOutputSchema>;

export async function applyArtisticStyle(input: ApplyArtisticStyleInput): Promise<ApplyArtisticStyleOutput> {
  return applyArtisticStyleFlow(input);
}

const prompt = ai.definePrompt({
  name: 'applyArtisticStylePrompt',
  input: {schema: ApplyArtisticStyleInputSchema},
  output: {schema: ApplyArtisticStyleOutputSchema},
  prompt: `Apply the following artistic style to the food photo: {{{style}}}.\n\nPhoto: {{media url=photoDataUri}}`,
});

const applyArtisticStyleFlow = ai.defineFlow(
  {
    name: 'applyArtisticStyleFlow',
    inputSchema: ApplyArtisticStyleInputSchema,
    outputSchema: ApplyArtisticStyleOutputSchema,
  },
  async input => {
    const {media} = await ai.generate({
        model: 'googleai/gemini-2.5-flash-image-preview',
        prompt: [
          {media: {url: input.photoDataUri}},
          {text: `Apply the following artistic style to the food photo: ${input.style}`},
        ],
        config: {
          responseModalities: ['TEXT', 'IMAGE'], // MUST provide both TEXT and IMAGE, IMAGE only won't work
        },
      });

    return { styledPhotoDataUri: media!.url! };
  }
);
