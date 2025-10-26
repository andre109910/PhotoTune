import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Camera, Lightbulb } from "lucide-react";

const BurgerIcon = (props: React.SVGProps<SVGSVGElement>) => (
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
    <path d="M4 12h16" />
    <path d="M4 18h16" />
    <path d="M4 6h16" />
    <path d="M12 4C8.686 4 6 6.686 6 10v10h12V10c0-3.314-2.686-6-6-6z" />
    <path d="M6 10h12" />
  </svg>
);

const PizzaIcon = (props: React.SVGProps<SVGSVGElement>) => (
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
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
    <path d="M12 2v20" />
    <path d="M2 12h20" />
    <path d="M17.65 6.35C16.03 4.73 14.11 4 12 4s-4.03.73-5.65 2.35" />
    <path d="M12 12l5.65-5.65" />
  </svg>
);


const packages = [
  {
    icon: Camera,
    title: "1 Foto Perfeita",
    description: "Ideal pra testar o poder do PhotoTune",
    price: "14,90",
    buttonText: "Transformar minha foto agora",
  },
  {
    icon: BurgerIcon,
    title: "5 Fotos Profissionais",
    description: "Perfeito pra deixar seu cardápio irresistível",
    price: "49,90",
    buttonText: "Quero transformar 5 fotos",
  },
  {
    icon: PizzaIcon,
    title: "10 Fotos Imbatíveis",
    description: "Transforme tudo e venda com impacto visual",
    price: "79,90",
    buttonText: "Melhorar minhas 10 fotos",
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="bg-background py-20 sm:py-24">
      <div className="container mx-auto max-w-[1100px] px-4">
        <div className="text-center">
          <h2 className="font-headline text-3xl font-bold text-title-blue md:text-4xl">
            Escolha o pacote ideal pra você 👇
          </h2>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
          {packages.map((pkg, index) => (
            <Card key={index} className="flex flex-col rounded-2xl shadow-lg transition-all hover:scale-[1.02] hover:shadow-xl">
              <CardHeader className="items-center text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mb-4">
                  <pkg.icon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="font-headline text-2xl font-bold text-title-blue">{pkg.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-1 flex-col items-center text-center">
                <div className="flex items-center gap-2 text-muted-foreground">
                    <Lightbulb className="h-4 w-4" />
                    <p>{pkg.description}</p>
                </div>
                <div className="my-8">
                  <span className="text-4xl font-bold">R$</span>
                  <span className="text-7xl font-bold tracking-tighter">{pkg.price.split(',')[0]}</span>
                  <span className="text-3xl font-bold text-muted-foreground">,{pkg.price.split(',')[1]}</span>
                </div>
                <div className="w-full mt-auto">
                  <Button size="lg" className="w-full h-12 rounded-xl text-md font-bold">
                    {pkg.buttonText}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="mt-12 space-y-4 text-center text-lg text-foreground">
          <p>📦 Você envia suas fotos → nós aplicamos IA → você recebe tudo pronto em alta qualidade!</p>
          <p>⚡️ Entrega rápida e resultados impressionantes em poucas horas!</p>
        </div>
      </div>
    </section>
  );
}
