const footerLinks = [
  {
    label: "GitHub",
    href: "https://github.com/EhsanKhanahmadi",
  },
  {
    label: "Email",
    href: "mailto:your-email@example.com",
  },
];



export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-300 flex-col gap-5 px-6 py-8 sm:flex-row sm:items-center sm:justify-between lg:px-8">
        <div>
          <p className="font-mono text-sm font-semibold text-foreground">
            Ehsan Khanahmadi
          </p>

          <p className="mt-1 text-xs text-muted-foreground">
            Backend-focused developer.
          </p>
        </div>

        <div className="flex items-center gap-5">
          {footerLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.label === "GitHub" ? "_blank" : undefined}
              rel={link.label === "GitHub" ? "noreferrer" : undefined}
              className="text-xs font-medium text-muted-foreground transition-colors duration-200 hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
            >
              {link.label}
            </a>
          ))}
        </div>

        <p className="font-mono text-xs text-muted-foreground">
          © {new Date().getFullYear()} Ehsan Khanahmadi
        </p>
      </div>
    </footer>
  );
}