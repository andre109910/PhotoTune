import { BeforeAfterSlider } from "@/components/before-after-slider";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export function Demo() {
  const beforeImage = PlaceHolderImages.find(img => img.id === 'before-burger');
  const afterImage = PlaceHolderImages.find(img => img.id === 'after-burger');

  if (!beforeImage || !afterImage) {
    return null;
  }

  return (
    <section id="demo" className="bg-background py-20 sm:py-24">
      <div className="container mx-auto max-w-[900px] px-4 text-center">
        <h2 className="font-headline text-3xl font-bold text-title-blue md:text-4xl">
          Veja o poder do PhotoTune em ação
        </h2>
        <p className="mt-2 text-lg text-foreground">
          📷 Arraste o controle abaixo e veja a transformação acontecer 👇
        </p>

        <div className="mt-8">
          <BeforeAfterSlider
            beforeImage={beforeImage}
            afterImage={afterImage}
          />
        </div>

        <p className="mt-8 text-xl font-medium text-foreground">
          “De uma imagem sem graça... para uma foto que vende por si só!”
        </p>
      </div>
    </section>
  );
}
