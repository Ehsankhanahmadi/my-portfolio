export default function StatusIndicator({
  children = "Available for opportunities",
}) {
  return (
    <div className="inline-flex items-center gap-2 font-mono text-xs font-medium uppercase tracking-wider text-success">
      <span
        className="h-2 w-2 rounded-full bg-success"
        aria-hidden="true"
      />

      <span>{children}</span>
    </div>
  );
}