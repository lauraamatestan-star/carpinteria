export default function Footer() {
  return (
    <footer className="w-full py-6 px-4 sm:px-6 bg-muted text-muted-foreground border-t border-border mt-auto text-center text-xs sm:text-sm">
      <div className="flex flex-col sm:flex-row items-center justify-between max-w-5xl mx-auto gap-2">
        <span>© {new Date().getFullYear()} Carpintería Los Artesanos. Todos los derechos reservados.</span>
        <span className="flex items-center gap-2 font-semibold text-primary">
          <span className="hidden sm:inline">Hecho por Laura</span>
          <span className="text-2xl font-signature">L</span>
          <span className="text-primary">♥</span>
        </span>
      </div>
    </footer>
  );
}
