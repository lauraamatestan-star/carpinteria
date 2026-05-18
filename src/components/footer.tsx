export default function Footer() {
  return (
    <footer className="w-full py-6 px-6 bg-muted text-muted-foreground border-t border-border mt-auto text-center text-sm">
      © {new Date().getFullYear()} Carpintería Los Artesanos. Todos los derechos reservados.
    </footer>
  );
}
