import Image from "next/image";

export function Evidence() {
    return (
        <section id="evidence" className="bg-transparent py-20 sm:py-24">
            <div className="container mx-auto max-w-[900px] px-4">
                <div className="mt-16 text-center">
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
            </div>
        </section>
    );
}
