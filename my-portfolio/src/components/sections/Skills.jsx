import { motion } from "motion/react";
import SectionHeading from "../ui/SectionHeading";

const skillGroups = [
  {
    title: "Backend",
    description: "Building APIs and application logic.",
    technologies: ["Python", "Django", "Django REST Framework", "Node.js"],
  },
  {
    title: "Data & Messaging",
    description: "Working with persistence, queues, and asynchronous systems.",
    technologies: ["PostgreSQL", "Redis", "RabbitMQ", "Celery"],
  },
  {
    title: "Infrastructure",
    description: "Containerized and production-oriented environments.",
    technologies: ["Docker", "MinIO", "Linux", "Git"],
  },
  {
    title: "Frontend",
    description: "Building clean and responsive interfaces.",
    technologies: ["React", "JavaScript", "Tailwind CSS", "Vite"],
  },
];



export default function Skills() {
  return (
    <section
      id="skills"
      className="mx-auto max-w-300 px-6 py-24 lg:px-8 lg:py-32"
    >
      <SectionHeading
        eyebrow="Technical Stack"
        title="Tools I use to turn ideas into working systems."
      />

      <div className="mt-12 grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-2">
        {skillGroups.map((group, index) => (
          <motion.article
            key={group.title}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.45,
              delay: index * 0.06,
              ease: "easeOut",
            }}
            className="bg-surface p-6 sm:p-8"
          >
            <div className="flex items-start justify-between gap-4">
              <h3 className="font-mono text-lg font-semibold text-foreground">
                {group.title}
              </h3>

              <span className="font-mono text-xs text-muted-foreground">
                0{index + 1}
              </span>
            </div>

            <p className="mt-3 max-w-sm text-sm leading-6 text-muted-foreground">
              {group.description}
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {group.technologies.map((technology) => (
                <span
                  key={technology}
                  className="rounded-md border border-border bg-background px-2.5 py-1.5 font-mono text-xs text-muted-foreground transition-colors duration-200 hover:border-accent/60 hover:text-foreground"
                >
                  {technology}
                </span>
              ))}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}