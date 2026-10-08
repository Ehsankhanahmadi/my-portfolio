import { motion } from "motion/react";
import SectionHeading from "../ui/SectionHeading";

const timeline = [
  {
    period: "Current",
    title: "Computer Engineering / IT Student",
    organization: "Academic & Independent Development",
    description:
      "Studying computer engineering and developing practical experience through backend systems, APIs, infrastructure, and software projects.",
  },
  {
    period: "Development",
    title: "Backend-focused Developer",
    organization: "Independent Projects",
    description:
      "Building real-world applications and backend architectures with Python, Django, REST APIs, databases, messaging systems, and containerized infrastructure.",
  },
];



export default function Experience() {
  return (
    <section
      id="experience"
      className="mx-auto max-w-300 px-6 py-24 lg:px-8 lg:py-32"
    >
      <SectionHeading
        eyebrow="Background"
        title="Learning by building real systems."
      />

      <div className="mt-12">
        {timeline.map((item, index) => (
          <motion.article
            key={item.title}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.5,
              delay: index * 0.08,
              ease: "easeOut",
            }}
            className="grid gap-5 border-t border-border py-8 sm:grid-cols-[140px_1fr] sm:gap-8"
          >
            <div className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
              {item.period}
            </div>

            <div>
              <h3 className="font-mono text-lg font-semibold text-foreground">
                {item.title}
              </h3>

              <p className="mt-2 text-sm font-medium text-accent">
                {item.organization}
              </p>

              <p className="mt-4 max-w-2xl text-sm leading-7 text-muted-foreground sm:text-base">
                {item.description}
              </p>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}