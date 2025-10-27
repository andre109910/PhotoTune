import { Button } from "@/components/ui/button";

export function FinalCta() {
  return (
    <section id="final-cta" className="bg-background py-20 sm:py-24">
      <div className="container mx-auto max-w-[900px] px-4 text-center">
        <h2 className="font-headline text-3xl font-bold text-title-blue md:text-4xl">
          🎯 Clique abaixo e envie suas fotos agora mesmo!
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-lg text-foreground">
          🧠 Em minutos, você vai ver como uma boa imagem muda tudo.
        </p>
        <div className="mt-10">
          <Button size="lg" className="h-auto rounded-xl px-6 py-4 text-lg font-bold transform transition-transform duration-300 hover:scale-105 sm:h-16 sm:px-12 sm:text-xl">
            Quero transformar minhas fotos com IA agora
          </Button>
        </div>
      </div>
    </section>
  );
}
