import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { CheckCircle } from 'lucide-react';

export function Guarantee() {
  return (
    <section id="guarantee" className="py-20 sm:py-24">
      <div className="container mx-auto max-w-[900px] px-4">
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-orange-100 p-8 md:p-12">
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12">
                <div className="flex-shrink-0">
                    <Image 
                    src="https://i.imgur.com/3i8pY8k.png" 
                    alt="Selo de Garantia 30 dias" 
                    width={200} 
                    height={200}
                    className="object-contain"
                    />
                </div>
                <div className="text-center md:text-left">
                    <h2 className="font-headline text-3xl font-bold text-title-brown md:text-4xl">
                    Risco Zero para Você!
                    </h2>
                    <p className="mt-4 text-lg text-foreground">
                    Sua satisfação é a nossa prioridade. Se, por qualquer motivo, você não ficar 100% satisfeito com o resultado das suas fotos, basta nos avisar em até 30 dias e nós devolveremos todo o seu dinheiro.
                    </p>
                    <p className="mt-2 text-lg text-foreground font-semibold">
                    Sem perguntas, sem burocracia.
                    </p>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
}
