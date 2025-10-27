import { CheckCircle2, Heart, Sparkles, Tag, User } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { AnimatedStats } from "@/components/animated-stats";

const benefits = [
  {
    icon: Sparkles,
    title: "Atraia mais cliques no cardápio digital",
    description: "Imagens profissionais chamam atenção instantaneamente",
    iconColor: "text-blue-500",
    bgColor: "bg-blue-100",
  },
  {
    icon: Tag,
    title: "Destaque seus pratos no iFood, Instagram ou site",
    description: "Se destaque da concorrência com fotos impecáveis",
    iconColor: "text-green-500",
    bgColor: "bg-green-100",
  },
  {
    icon: Heart,
    title: "Faça o cliente sentir vontade de comprar",
    description: "Antes mesmo de ler a descrição do prato",
    iconColor: "text-red-500",
    bgColor: "bg-red-100",
  },
  {
    icon: User,
    title: "Receba imagens prontas, em alta qualidade",
    description: "Com aparência profissional, sem esforço",
    iconColor: "text-purple-500",
    bgColor: "bg-purple-100",
  },
];

export function Benefits() {
  return (
    <section id="benefits" className="bg-background py-20 sm:py-24">
      <div className="container mx-auto max-w-[900px] px-4">
        <div className="text-center mb-12">
            <h2 className="font-headline text-3xl font-bold text-title-blue md:text-4xl">
                Benefícios diretos para o seu negócio
            </h2>
            <p className="text-lg text-muted-foreground mt-2">
                Transforme visualizações em vendas
            </p>
        </div>
        
        <AnimatedStats target={20} />
        
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
          {benefits.map((benefit, index) => (
            <Card key={index} className="bg-white shadow-lg rounded-2xl border-none">
                <CardContent className="p-6">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center ${benefit.bgColor} mb-4`}>
                        <benefit.icon className={`h-6 w-6 ${benefit.iconColor}`} />
                    </div>
                    <div className="flex items-center gap-2 mb-2">
                        <CheckCircle2 className="h-5 w-5 shrink-0 text-green-500" />
                        <h3 className="text-lg font-semibold text-foreground">{benefit.title}</h3>
                    </div>
                    <p className="text-muted-foreground ml-7">{benefit.description}</p>
                </CardContent>
            </Card>
          ))}
        </div>
        <div className="mt-12 text-center">
            <div className="inline-block bg-blue-100/80 text-blue-800 rounded-xl px-6 py-4">
                <p className="font-medium">A <strong className="font-bold">primeira impressão</strong> é a que fica. Garanta que seja <strong className="font-bold">inesquecível!</strong></p>
            </div>
        </div>
      </div>
    </section>
  );
}
