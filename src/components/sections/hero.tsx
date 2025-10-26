import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Sparkles } from "lucide-react";

export function Hero() {
  return (
    <section id="hero" className="bg-background py-20 sm:py-28">
      <div className="container mx-auto max-w-[900px] px-4 text-center">
        <Badge variant="outline" className="mb-4 border-primary/30 bg-primary/10 py-2 px-4 text-sm font-bold text-primary">
          <Sparkles className="mr-2 h-4 w-4" />
          Tecnologia de IA Profissional
        </Badge>
        <h1 className="font-headline text-4xl font-bold text-title-blue md:text-5xl lg:text-6xl">
          Transforme fotos comuns em imagens <span className="text-primary underline decoration-wavy underline-offset-8">irresistíveis</span> com IA
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-foreground md:text-xl">
          Fotos ruins afastam clientes. O PhotoTune usa IA para transformar imagens sem graça em fotos profissionais, vibrantes e irresistíveis — prontas para atrair olhares e aumentar suas vendas!
        </p>
        <div className="mt-10">
          <Button size="lg" className="h-14 rounded-xl px-10 text-lg font-bold">
            Quero transformar minhas fotos agora
          </Button>
        </div>
      </div>
    </section>
  );
}
