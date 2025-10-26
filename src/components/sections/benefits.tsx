import { CheckCircle2 } from "lucide-react";

const benefits = [
  "Atraia mais cliques no cardápio digital",
  "Destaque seus pratos no iFood, Instagram ou site",
  "Faça o cliente sentir vontade de comprar antes mesmo de ler a descrição",
  "Receba imagens prontas, em alta qualidade, com aparência profissional",
];

export function Benefits() {
  return (
    <section id="benefits" className="bg-gray-50/50 py-20 sm:py-24">
      <div className="container mx-auto max-w-[900px] px-4">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-start gap-4">
              <CheckCircle2 className="h-8 w-8 shrink-0 text-primary" />
              <p className="text-lg font-medium text-foreground">{benefit}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
