export function Footer() {
  return (
    <footer className="bg-title-brown text-primary-foreground/80 py-8">
      <div className="container mx-auto max-w-[900px] px-4 text-center">
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-8 text-sm">
          <span>📍 Serviço 100% digital</span>
          <span className="hidden sm:inline-block">•</span>
          <span>⚡️ Entrega rápida</span>
          <span className="hidden sm:inline-block">•</span>
          <span>💬 Suporte humano</span>
        </div>
        <p className="mt-6 text-sm">
          💡 Feito com tecnologia de ponta em Inteligência Artificial para empreendedores que valorizam o visual.
        </p>
        <p className="mt-4 text-xs text-primary-foreground/60">
          © {new Date().getFullYear()} PhotoTune AI. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
