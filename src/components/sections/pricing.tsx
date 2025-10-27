import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Camera, CheckCircle2, Star, WandSparkles } from "lucide-react";
import Link from 'next/link';

const PizzaSliceIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M21.21 15.89A10 10 0 1 1 8.11 2.79" />
      <path d="M22 12A10 10 0 0 0 12 2v10z" />
    </svg>
  );

const packages = [
  {
    icon: Camera,
    title: "1 Foto Perfeita",
    description: "Ideal pra testar o poder do PhotoTune",
    price: "14,90",
    pricePerPhoto: null,
    economy: null,
    features: ["Processamento com IA", "Alta qualidade", "Entrega rápida"],
    buttonText: "Transformar minha foto agora",
    href: "https://pay.cakto.com.br/yo9ptez",
    popular: false,
    variant: 'default' as const,
  },
  {
    icon: WandSparkles,
    title: "5 Fotos Profissionais",
    description: "Perfeito pra deixar seu cardápio irresistível",
    price: "49,90",
    pricePerPhoto: "R$ 9,98 por foto",
    economy: "Economize R$ 24,60",
    features: ["Processamento com IA", "Alta qualidade", "Entrega rápida"],
    buttonText: "Quero transformar 5 fotos",
    href: "https://pay.cakto.com.br/32au8fd",
    popular: false,
    variant: 'default' as const,
  },
  {
    icon: PizzaSliceIcon,
    title: "10 Fotos Imbatíveis",
    description: "Transforme tudo e venda com impacto visual",
    price: "79,90",
    pricePerPhoto: "R$ 7,99 por foto",
    economy: "Economize R$ 69,10",
    features: ["Processamento com IA", "Alta qualidade", "Entrega rápida"],
    buttonText: "Melhorar minhas 10 fotos",
    href: "https://pay.cakto.com.br/ivte3oq_622949",
    popular: true,
    variant: 'popular' as const,
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="py-20 sm:py-24">
      <div className="container mx-auto max-w-[1100px] px-4">
        <div className="text-center">
            <div className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary">
                Ofertas e Pacotes
            </div>
          <h2 className="font-headline text-3xl font-bold text-title-blue md:text-4xl mt-4">
            Escolha o pacote ideal pra você
          </h2>
          <p className="mt-2 text-muted-foreground">Todos os pacotes incluem processamento com IA de última geração</p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3 items-start">
          {packages.map((pkg, index) => (
            <Card 
                key={index} 
                className={`flex flex-col rounded-2xl shadow-lg transition-all text-center ${pkg.popular ? 'border-green-400 border-2 relative scale-105' : 'border-border'}`}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-green-400 px-4 py-1.5 text-sm font-bold text-white">
                  <Star className="w-4 h-4 inline-block mr-1.5 fill-white" />
                  MAIS POPULAR
                </div>
              )}
              <CardHeader className="items-center text-center pt-10">
                <div className={`flex h-16 w-16 items-center justify-center rounded-full mb-4 ${pkg.popular ? 'bg-green-100' : 'bg-primary/10'}`}>
                  <pkg.icon className={`h-8 w-8 ${pkg.popular ? 'text-green-500' : 'text-primary'}`} />
                </div>
                <CardTitle className="font-headline text-2xl font-bold text-title-blue">{pkg.title}</CardTitle>
                <CardDescription>
                    {pkg.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex flex-1 flex-col items-center text-center px-6 pb-8">
                {pkg.economy && <div className="text-green-600 font-semibold text-sm mb-2">{pkg.economy}</div>}
                <div className={`my-4 flex items-baseline justify-center font-bold ${pkg.popular ? 'text-green-500' : 'text-primary'}`}>
                  <span className="text-3xl">R$</span>
                  <span className="text-6xl tracking-tighter">{pkg.price.split(',')[0]}</span>
                  <span className="text-2xl">,{pkg.price.split(',')[1]}</span>
                </div>
                {pkg.pricePerPhoto && <p className="text-muted-foreground -mt-2 mb-6">{pkg.pricePerPhoto}</p>}

                <ul className="space-y-3 text-left self-start my-6">
                    {pkg.features.map(feature => (
                        <li key={feature} className="flex items-center gap-3 text-muted-foreground">
                            <CheckCircle2 className="h-5 w-5 text-green-500" />
                            <span>{feature}</span>
                        </li>
                    ))}
                </ul>

                <div className="w-full mt-auto">
                  <Button size="lg" className={`w-full h-12 rounded-xl text-md font-bold ${pkg.popular ? 'bg-green-400 hover:bg-green-500' : 'bg-primary'}`} asChild>
                    <Link href={pkg.href} target="_blank">
                      {pkg.buttonText}
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
