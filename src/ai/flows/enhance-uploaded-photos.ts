'use server';

/**
 * @fileOverview AI-powered photo enhancement flow.
 *
 * - enhanceUploadedPhoto - A function that enhances an uploaded photo using AI.
 * - EnhanceUploadedPhotoInput - The input type for the enhanceUploadedPhoto function.
 * - EnhanceUploadedPhotoOutput - The return type for the enhanceUploadedPhoto function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const EnhanceUploadedPhotoInputSchema = z.object({
  photoDataUri: z
    .string()
    .describe(
      'A photo to enhance, as a data URI that must include a MIME type and use Base64 encoding. Expected format: \'data:<mimetype>;base64,<encoded_data>\'.' 
    ),
});
export type EnhanceUploadedPhotoInput = z.infer<typeof EnhanceUploadedPhotoInputSchema>;

const EnhanceUploadedPhotoOutputSchema = z.object({
  enhancedPhotoDataUri: z.string().describe('The enhanced photo as a data URI.'),
});
export type EnhanceUploadedPhotoOutput = z.infer<typeof EnhanceUploadedPhotoOutputSchema>;

export async function enhanceUploadedPhoto(input: EnhanceUploadedPhotoInput): Promise<EnhanceUploadedPhotoOutput> {
  return enhanceUploadedPhotoFlow(input);
}

const enhanceUploadedPhotoPrompt = ai.definePrompt({
  name: 'enhanceUploadedPhotoPrompt',
  input: {schema: EnhanceUploadedPhotoInputSchema},
  output: {schema: EnhanceUploadedPhotoOutputSchema},
  prompt: `You are an AI photo enhancer. You will take a photo and enhance its color, brightness, contrast and focus to make it look more appealing.

Enhance the following photo:

{{media url=photoDataUri}}`,
});

const enhanceUploadedPhotoFlow = ai.defineFlow(
  {
    name: 'enhanceUploadedPhotoFlow',
    inputSchema: EnhanceUploadedPhotoInputSchema,
    outputSchema: EnhanceUploadedPhotoOutputSchema,
  },
  async input => {
    const {media} = await ai.generate({
        model: 'googleai/gemini-2.5-flash-image-preview',
        prompt: [
          {media: {url: input.photoDataUri}},
          {text: 'enhance this image to improve its color, brightness, contrast, and focus'},
        ],
        config: {
          responseModalities: ['TEXT', 'IMAGE'], // MUST provide both TEXT and IMAGE, IMAGE only won't work
        },
      });
    return {enhancedPhotoDataUri: media.url!};
  }
);
