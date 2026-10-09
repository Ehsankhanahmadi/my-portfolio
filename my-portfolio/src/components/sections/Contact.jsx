import { motion } from "motion/react";
import SectionHeading from "../ui/SectionHeading";
import Button from "../ui/Button";

const contactLinks = [
  {
    label: "GitHub",
    value: "github.com/EhsanKhanahmadi",
    href: "https://github.com/EhsanKhanahmadi",
  },
  {
    label: "Email",
    value: "Get in touch via email",
    href: "mailto:your-email@example.com",
  },
];



export default function Contact() {
  return (
    <section
      id="contact"
      className="mx-auto max-w-300 px-6 py-24 lg:px-8 lg:py-32"
    >
      <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <SectionHeading
            eyebrow="Contact"
            title="Let's build something useful."
          />

          <p className="mt-8 max-w-xl text-base leading-8 text-muted-foreground sm:text-lg">
            I'm interested in backend engineering, developer tools, and
            building reliable systems. If you have a project, opportunity, or
            idea worth discussing, feel free to reach out.
          </p>

          <div className="mt-8">
            <Button href="mailto:your-email@example.com">
              Get in Touch
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.5,
            delay: 0.08,
            ease: "easeOut",
          }}
          className="min-w-0 rounded-xl border border-border bg-surface p-6 transition-colors duration-200 hover:border-accent/60 sm:p-8"
        >
          {contactLinks.map((link, index) => (
            <a
              key={link.label}
              href={link.href}
              target={link.label === "GitHub" ? "_blank" : undefined}
              rel={link.label === "GitHub" ? "noreferrer" : undefined}
              className={`group flex items-center justify-between gap-6 py-5 transition-colors duration-200 hover:text-accent ${
                index !== contactLinks.length - 1
                  ? "border-b border-border"
                  : ""
              }`}
            >
              <div>
                <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                  {link.label}
                </p>

                <p className="mt-2 text-sm font-medium text-foreground transition-colors duration-200 group-hover:text-accent">
                  {link.value}
                </p>
              </div>

              <span
                className="font-mono text-lg text-muted-foreground transition-transform duration-200 group-hover:translate-x-1 group-hover:text-accent"
                aria-hidden="true"
              >
                →
              </span>
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}