import { motion } from "motion/react";
import SectionHeading from "../ui/SectionHeading";

const focusItems = [
  {
    label: "Focus",
    value: "Backend Engineering",
  },
  {
    label: "Primary",
    value: "Python · Django · DRF",
  },
  {
    label: "Infrastructure",
    value: "Docker · PostgreSQL · RabbitMQ",
  },
  {
    label: "Frontend",
    value: "React · JavaScript",
  },
];



export default function About() {
  return (
    <section
      id="about"
      className="mx-auto max-w-300 px-6 py-24 lg:px-8 lg:py-32"
    >
      <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12">
        <div className="min-w-0">
          <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.5, ease: "easeOut" }}>
            <SectionHeading eyebrow="Engineering Focus" title="Building systems that are meant to last."/>
          </motion.div>
          <div>
          </div>
          <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.5, ease: "easeOut" }} className="max-w-2xl space-y-5 text-base leading-8 text-muted-foreground sm:text-lg">
            <div className="mt-8 max-w-xl text-base leading-8 text-muted-foreground sm:text-lg">
              <p>
                I focus on building backend systems, APIs, and developer tools
                with an emphasis on reliability, maintainability, and clean
                architecture.
              </p>

              <p>
                My main ecosystem is Python and Django, while I work with
                databases, queues, containers, and supporting infrastructure to
                build systems that can grow beyond a simple prototype.
              </p>
            </div>
          </motion.div>
        </div>
        <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.5, delay: 0.08, ease: "easeOut" }} className="min-w-0 rounded-xl border border-border bg-surface p-6 transition-colors duration-200 hover:border-accent/60 sm:p-8">
          {focusItems.map((item, index) => (
            <div
              key={item.label}
              className={`flex flex-col gap-2 py-5 first:pt-0 last:pb-0 sm:flex-row sm:items-center sm:justify-between sm:gap-6 ${
                index !== focusItems.length - 1
                  ? "border-b border-border"
                  : ""
              }`}
            >
              <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                {item.label}
              </span>
              <span className="text-sm font-medium text-foreground sm:text-right">
                {item.value}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}