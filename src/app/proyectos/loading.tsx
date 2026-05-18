export default function Loading() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {[1, 2, 3].map((i) => (
        <div key={i} className="bg-muted animate-pulse h-64 rounded shadow" />
      ))}
    </div>
  );
}
