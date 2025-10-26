import Image from 'next/image';

export function Testimonials() {
  return (
    <section id="testimonials" className="bg-transparent py-20 sm:py-24">
      <div className="container mx-auto max-w-[900px] px-4 text-center">
        <h2 className="font-headline text-3xl font-bold text-title-blue md:text-4xl">
          Pessoas que confiaram no nosso trabalho
        </h2>
        <div className="mt-8 w-full max-w-4xl mx-auto rounded-xl bg-white p-2 shadow-2xl">
            <div className="relative aspect-[2/1] w-full overflow-hidden rounded-md">
                <Image
                    src="https://i.imgur.com/bwR3Lg5.jpeg"
                    alt="Depoimentos de clientes satisfeitos"
                    fill
                    className="object-contain"
                />
            </div>
        </div>
      </div>
    </section>
  );
}
