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
    <section id="solution" className="py-20 sm:py-24">
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
      </div>
    </section>
  );
}
