"use client";

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
      <h1 className="text-3xl font-bold mb-4 text-destructive">¡Vaya! Algo salió mal.</h1>
      <p className="mb-6 text-muted-foreground">Ha ocurrido un error inesperado. Por favor, inténtalo de nuevo o vuelve más tarde.</p>
      <button
        onClick={reset}
        className="bg-primary text-primary-foreground px-6 py-2 rounded font-semibold shadow hover:bg-primary/90 transition"
      >
        Reintentar
      </button>
    </div>
  );
}
