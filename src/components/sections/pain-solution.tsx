import { Camera, Lightbulb, TrendingDown, Frown } from "lucide-react";
import Image from "next/image";

export function PainSolution() {
  return (
    <section id="solution" className="bg-gray-50/50 py-20 sm:py-24 overflow-x-hidden">
      <div className="container mx-auto max-w-[900px] px-4">
        <div className="grid gap-12 md:grid-cols-2 md:gap-16">
          <div className="space-y-6">
            <h2 className="font-headline text-3xl font-bold text-title-blue md:text-4xl">
              Você já percebeu que as fotos do seu cardápio não fazem jus ao sabor dos seus pratos?
            </h2>
            <div className="space-y-4 text-lg text-foreground">
              <div className="flex items-start gap-3">
                <TrendingDown className="mt-1 h-6 w-6 shrink-0 text-destructive" />
                <p><strong className="font-semibold">As cores parecem mortas...</strong></p>
              </div>
              <div className="flex items-start gap-3">
                <Camera className="mt-1 h-6 w-6 shrink-0 text-muted-foreground" />
                <p><strong className="font-semibold">A iluminação não valoriza o produto...</strong></p>
              </div>
              <div className="flex items-start gap-3">
                <Frown className="mt-1 h-6 w-6 shrink-0 text-amber-500" />
                <p><strong className="font-semibold">E o resultado? O cliente passa direto.</strong></p>
              </div>
            </div>
            <div className="rounded-lg border border-l-4 border-accent bg-accent/20 p-4 text-base text-foreground">
              <h4 className="font-bold mb-2 text-center">Um estudo da Universidade de Oxford mostra que as pessoas "comem com os olhos"</h4>
              <div className="relative aspect-video w-full max-w-sm mx-auto mb-4">
                  <Image src="https://i.imgur.com/qBMEdZ6.png" alt="Estatísticas de marketing visual" fill className="object-contain" />
              </div>
              <p className="italic text-center">
                ou seja, a aparência do seu prato influencia diretamente na decisão de compra.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <Lightbulb className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-headline text-3xl font-bold text-title-blue">
                E é aí que entra o PhotoTune.
              </h3>
            </div>
            <p className="text-lg leading-relaxed text-foreground">
              Com ele, você envia suas fotos “zoadaças” (sim, do jeito que estão!) e em poucos minutos recebe imagens otimizadas com IA — com cor, brilho, contraste e foco profissional.
            </p>
            <p className="text-lg leading-relaxed text-foreground">
              Nada de fotógrafo caro ou programas complicados — o PhotoTune faz tudo automaticamente, com tecnologia de ponta.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
