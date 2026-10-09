const variants = {
  primary:
    "bg-accent text-background hover:bg-accent-hover border border-transparent",
  secondary:
    "border border-border bg-transparent text-foreground hover:border-accent hover:text-accent",
};



export default function Button({
  children,
  href,
  variant = "primary",
  className = "",
  ...props
}) {
  const baseStyles =
    "inline-flex cursor-pointer items-center justify-center rounded-md px-5 py-2.5 text-sm font-medium transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent";

  const classes = `${baseStyles} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}