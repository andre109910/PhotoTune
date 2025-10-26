import type {Metadata} from 'next';
import { Poppins, PT_Sans } from 'next/font/google';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: 'PhotoTune AI | Transforme suas fotos de cardápio com IA',
  description: 'Use Inteligência Artificial para transformar fotos comuns em imagens de pratos vibrantes e irresistíveis, aumentando suas vendas e atraindo mais clientes.',
};

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-headline',
});

const ptSans = PT_Sans({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-body',
});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&family=PT+Sans:wght@400;700&display=swap" rel="stylesheet" />
      </head>
      <body className={`font-body antialiased ${poppins.variable} ${ptSans.variable}`}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
