export default function SectionHeading({ eyebrow, title }) {
  return (
    <div>
      {eyebrow && (
        <p className="font-mono text-xs font-medium uppercase tracking-wider text-accent">
          {eyebrow}
        </p>
      )}

      <h2 className="mt-3 max-w-2xl font-mono text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
        {title}
      </h2>
    </div>
  );
}