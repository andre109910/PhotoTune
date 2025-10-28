import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Sparkles, CheckCircle2, WandSparkles } from "lucide-react";
import Link from "next/link";

export function Hero() {
  return (
    <section id="hero" className="py-20 sm:py-28">
      <div className="container mx-auto max-w-[900px] px-4 text-center">
        <Badge variant="outline" className="mb-4 border-primary/30 bg-primary/10 py-2 px-4 text-sm font-bold text-primary">
          <Sparkles className="mr-2 h-4 w-4" />
          Tecnologia de IA Profissional
        </Badge>
        <h1 className="font-headline text-4xl font-bold text-title-brown md:text-5xl lg:text-6xl">
          Transforme fotos comuns em imagens <span className="text-primary underline decoration-primary/70 underline-offset-8 decoration-4">irresistíveis</span> com IA
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-foreground md:text-xl">
          Fotos ruins afastam clientes. O PhotoTune usa IA para transformar imagens sem graça em fotos profissionais, vibrantes e irresistíveis — prontas para atrair olhares e <span className="text-primary font-semibold">aumentar suas vendas!</span>
        </p>
        <div className="mt-10">
          <Button size="lg" className="h-auto rounded-full px-8 py-3 text-base font-bold sm:h-14 sm:px-10 sm:text-lg" asChild>
            <Link href="#pricing">
              <WandSparkles className="mr-2 h-5 w-5" />
              Quero transformar minhas fotos agora
            </Link>
          </Button>
        </div>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 text-sm text-muted-foreground sm:flex-row sm:gap-8">
            <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-500" />
                <span>Resultados em minutos</span>
            </div>
            <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-500" />
                <span>100% automático</span>
            </div>
            <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-500" />
                <span>Qualidade profissional</span>
            </div>
        </div>
      </div>
    </section>
  );
}
