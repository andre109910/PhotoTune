import { BeforeAfterSlider } from "@/components/before-after-slider";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export function Demo() {
  const sliders = [
    {
      before: PlaceHolderImages.find(img => img.id === 'before-burger'),
      after: PlaceHolderImages.find(img => img.id === 'after-burger'),
    },
    {
      before: PlaceHolderImages.find(img => img.id === 'before-pizza'),
      after: PlaceHolderImages.find(img => img.id === 'after-pizza'),
    },
    {
      before: PlaceHolderImages.find(img => img.id === 'before-salad'),
      after: PlaceHolderImages.find(img => img.id === 'after-salad'),
    },
  ];

  return (
    <section id="demo" className="bg-background py-20 sm:py-24">
      <div className="container mx-auto px-4 text-center">
        <h2 className="font-headline text-3xl font-bold text-title-blue md:text-4xl">
          Veja o poder do PhotoTune em ação
        </h2>
        <p className="mt-2 text-lg text-foreground">
          📷 Arraste o controle abaixo e veja a transformação acontecer 👇
        </p>

        <div className="mt-8">
            <Carousel className="w-full max-w-4xl mx-auto" opts={{ loop: true }}>
                <CarouselContent>
                    {sliders.map((slide, index) => (
                        slide.before && slide.after && (
                        <CarouselItem key={index}>
                            <BeforeAfterSlider
                                beforeImage={slide.before}
                                afterImage={slide.after}
                            />
                        </CarouselItem>
                        )
                    ))}
                </CarouselContent>
                <CarouselPrevious className="hidden sm:flex" />
                <CarouselNext className="hidden sm:flex" />
            </Carousel>
        </div>

        <p className="mt-8 text-xl font-medium text-foreground">
          “De uma imagem sem graça... para uma foto que vende por si só!”
        </p>
      </div>
    </section>
  );
}
