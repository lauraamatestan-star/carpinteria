export default function Loading() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <div className="bg-muted animate-pulse h-80 rounded shadow mb-6" />
      <div className="h-8 w-2/3 bg-muted animate-pulse rounded mb-4" />
      <div className="h-4 w-1/2 bg-muted animate-pulse rounded mb-2" />
      <div className="h-4 w-1/3 bg-muted animate-pulse rounded" />
    </div>
  );
}
