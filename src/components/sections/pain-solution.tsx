import { Frown, Lightbulb, Palette, Sun } from "lucide-react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

const problems = [
    {
      icon: Palette,
      text: "As cores parecem mortas...",
      iconClass: "text-red-500",
    },
    {
      icon: Sun,
      text: "A iluminação não valoriza o produto...",
      iconClass: "text-orange-500",
    },
    {
      icon: Frown,
      text: "E o resultado? O cliente passa direto.",
      iconClass: "text-yellow-500",
    },
  ];
  

export function PainSolution() {
  return (
    <section id="solution" className="bg-transparent py-20 sm:py-24 overflow-x-hidden">
      <div className="container mx-auto max-w-[900px] px-4">
        <div className="text-center">
            <h2 className="font-headline text-3xl font-bold text-title-blue md:text-4xl">
              Você já percebeu que as fotos do seu cardápio não fazem jus ao sabor dos seus pratos?
            </h2>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {problems.map((problem, index) => (
            <Card key={index} className="bg-white shadow-lg rounded-2xl border-none">
              <CardContent className="flex flex-col items-center justify-center p-6 text-center">
                <div className="mb-4">
                    <problem.icon className={`h-10 w-10 ${problem.iconClass}`} />
                </div>
                <p className="text-muted-foreground">{problem.text}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12">
            <div className="relative aspect-video w-full max-w-3xl mx-auto shadow-2xl rounded-2xl overflow-hidden">
                <Image src="https://i.imgur.com/qBMEdZ6.png" alt="Estatísticas de marketing visual" fill className="object-contain" />
            </div>
        </div>

        <div className="mt-16 text-center">
          <h3 className="font-headline text-2xl font-bold text-title-blue">
            Um estudo da Universidade de Oxford mostra que as pessoas <span className="text-primary">“comem com os olhos”</span>
          </h3>
        </div>
        <div className="mt-4">
            <div className="border-l-4 border-primary bg-primary/10 p-6 rounded-r-lg">
                <p className="text-lg text-foreground italic">
                  ...ou seja, a aparência do seu prato <strong className="font-semibold">influencia diretamente</strong> na decisão de compra.
                </p>
            </div>
        </div>
        
        <div className="mt-16 bg-gradient-to-b from-blue-50 to-white p-8 rounded-2xl text-center">
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
                <Lightbulb className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-headline text-3xl font-bold text-title-blue">
                E é aí que entra o PhotoTune.
              </h3>
            </div>
            <p className="text-lg leading-relaxed text-foreground max-w-3xl mx-auto">
              Com ele, você envia suas fotos “zoadaças” (sim, do jeito que estão!) e em poucos minutos recebe imagens otimizadas com IA — com cor, brilho, contraste e foco profissional.
            </p>
            <p className="text-lg leading-relaxed text-foreground max-w-3xl mx-auto mt-4">
              Nada de fotógrafo caro ou programas complicados — o PhotoTune faz tudo automaticamente, com tecnologia de ponta.
            </p>
        </div>

      </div>
    </section>
  );
}
