import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useTheme } from "../../context/ThemeContext";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];



export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const handleMobileThemeToggle = () => {
    toggleTheme();
    setIsMenuOpen(false);
  };

  const handleNavigation = (href) => {
    setIsMenuOpen(false);

    const target = document.querySelector(href);

    if (!target) {
      return;
    }

    window.history.pushState({}, "", href);

    setTimeout(() => {
      const offset = window.innerWidth < 768 ? 32 : 80;

      const targetPosition =
        target.getBoundingClientRect().top + window.scrollY - offset;

      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    }, 350);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/90 backdrop-blur-md">
      <nav
        className="mx-auto flex h-16 max-w-300 items-center justify-between px-6 lg:px-8"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <a
          href="#home"
          className="font-mono text-lg font-semibold tracking-tight text-foreground transition-colors duration-200 hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
          aria-label="Ehsan Khanahmadi - Home"
        >
          EH
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-muted-foreground transition-colors duration-200 hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
            >
              {item.label}
            </a>
          ))}

          {/* Theme Toggle - visual placeholder for now */}
          <button
            type="button"
            onClick={toggleTheme}
            className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-md border border-border text-muted-foreground transition-colors duration-200 hover:border-accent hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
          >
            <span aria-hidden="true" className="font-mono text-sm">
              {theme === "dark" ? "☼" : "☾"}
            </span>
          </button>
        </div>
        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setIsMenuOpen((previous) => !previous)}
          className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-md border border-border text-muted-foreground transition-colors duration-200 hover:border-accent hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent md:hidden"
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
          aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
        >
          <span className="sr-only">
            {isMenuOpen ? "Close menu" : "Open menu"}
          </span>

          <span className="flex w-4 flex-col gap-1.5" aria-hidden="true">
            <span
              className={`h-px w-full bg-current transition-transform duration-200 ${
                isMenuOpen ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              className={`h-px w-full bg-current transition-opacity duration-200 ${
                isMenuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`h-px w-full bg-current transition-transform duration-200 ${
                isMenuOpen ? "-translate-y-1.5 -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </nav>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            id="mobile-navigation"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden border-t border-border/70 md:hidden"
          >
            <div className="mx-auto flex max-w-300 flex-col px-6 py-4">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(event) => {
                    event.preventDefault();
                    handleNavigation(item.href);
                  }}
                  className="border-b border-border/50 py-4 text-sm font-medium text-muted-foreground transition-colors duration-200 hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                >
                  {item.label}
                </a>
              ))}

              <button
                type="button"
                onClick={handleMobileThemeToggle}
                className="mt-4 flex w-full cursor-pointer items-center justify-between rounded-md border border-border px-4 py-3 text-sm font-medium text-muted-foreground transition-colors duration-200 hover:border-accent hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
                aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
              >
                <span>Theme</span>

                <span aria-hidden="true" className="font-mono">
                  {theme === "dark" ? "☼" : "☾"}
                </span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}