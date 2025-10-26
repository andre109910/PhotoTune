import Image from "next/image";
import { Lightbulb } from "lucide-react";

export function Evidence() {
    return (
        <section id="evidence" className="bg-transparent py-20 sm:py-24">
            <div className="container mx-auto max-w-[900px] px-4">
                <div className="text-center">
                <h3 className="font-headline text-3xl font-bold text-title-blue md:text-4xl">
                    Um estudo da Universidade de Oxford mostra que as pessoas <span className="text-primary">“comem com os olhos”</span>
                </h3>
                </div>
                
                <div className="mt-8">
                    <div className="relative aspect-video w-full max-w-3xl mx-auto shadow-2xl rounded-2xl overflow-hidden">
                        <Image src="https://i.imgur.com/qBMEdZ6.png" alt="Estatísticas de marketing visual" fill className="object-contain" />
                    </div>
                </div>

                <div className="mt-8">
                    <div className="bg-blue-100/60 border-l-4 border-blue-500 p-6 rounded-lg">
                        <p className="text-lg text-blue-900 italic text-center">
                        ...ou seja, a aparência do seu prato <strong className="font-semibold">influencia diretamente</strong> na decisão de compra.
                        </p>
                    </div>
                </div>

                <div className="mt-16 bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl shadow-md border border-blue-100">
                    <div className="flex items-center justify-center gap-4 mb-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
                            <Lightbulb className="h-6 w-6 text-primary" />
                        </div>
                        <h3 className="font-headline text-3xl font-bold text-title-blue text-center">
                            É aí que entra o PhotoTune.
                        </h3>
                    </div>
                    <div className="text-center max-w-3xl mx-auto">
                        <p className="text-lg leading-relaxed text-foreground">
                            Com ele, você envia suas fotos “zoadaças” (sim, do jeito que estão!) e em poucos minutos recebe imagens otimizadas com IA — com cor, brilho, contraste e foco profissional.
                        </p>
                        <p className="text-lg leading-relaxed text-foreground mt-4">
                            Nada de fotógrafo caro ou programas complicados — o PhotoTune faz tudo automaticamente, com tecnologia de ponta.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
