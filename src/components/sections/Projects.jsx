import { motion } from "motion/react";
import SectionHeading from "../ui/SectionHeading";

const projects = [
  {
    title: "Agent For All Application",
    description:
      "This project is currently under development and has not yet reached the production stage. It is a multi-platform microservices project designed for business bots, and the project's website will be unveiled soon.",
    stack: [
      "Django",
      "DRF",
      "FastAPI",
      "AI Agent",
      "Postgresql",
      "Qdrant",
      "Httpx",
      "RabbitMQ",
      "Celery",
      "Docker",
      "React",
      "React Router",
    ],
    type: "Microservice Platform",
    featured: true,
    href: "#"
  },
  {
    title: "KeyForge",
    description:
      "There is an open-source package that helps you avoid feeling frustrated when using faulty keyboards and allows you to manage your keyboards effectively.",
    stack: [
      "Python",
      "AI",
    ],
    type: "Backend",
    featured: true,
    href: "https://github.com/Ehsankhanahmadi/KeyForge"
  },
  {
    title: "React Admin Dashboard",
    description:
      "A versatile dashboard—regardless of the application you are building, every program requires a dashboard system and an administration panel. This open-source project has been designed for you; it is both beautiful and comprehensive.",
    stack: [
      "Vite",
      "React",
      "React Router",
      "TypeScript",
      "Tailwindcss",
      "Chartjs"
    ],
    type: "Frontend",
    featured: false,
    href: "https://github.com/Ehsankhanahmadi/react-admin-dashboard"
  },
];



export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-300 px-6 py-24 lg:px-8 lg:py-32">
      <SectionHeading eyebrow="Selected Work" title="Projects built around real engineering problems."/>
      <div className="mt-12 space-y-5">
        {projects.map((project, index) => (
          <motion.article key={project.title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.5,
              delay: index * 0.08,
              ease: "easeOut",
            }}
            className={`group rounded-lg border border-border bg-surface p-6 transition-colors duration-200 hover:border-accent/60 sm:p-8 ${
              project.featured ? "lg:p-10" : ""
            }`}
          >
            <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
              <div className="max-w-3xl">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="font-mono text-xs uppercase tracking-wider text-accent">
                    {project.type}
                  </span>
                  {project.featured && (
                    <span className="rounded-full border border-border px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                      Featured
                    </span>
                  )}
                </div>
                <h3 className="mt-4 font-mono text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
                  {project.title}
                </h3>
                <p className="mt-4 max-w-2xl text-sm leading-7 text-muted-foreground sm:text-base">
                  {project.description}
                </p>
              </div>
              <div className="flex shrink-0 items-center gap-2">
                <a
                  href={project.href}
                  target={project.href === "#" ? undefined : "_blank"}
                  className="inline-flex h-10 items-center justify-center rounded-md border border-border px-4 text-sm font-medium text-foreground transition-colors duration-200 hover:border-accent hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
                >
                  View Project
                </a>
              </div>
            </div>
            <div className="mt-8 flex flex-wrap gap-2 border-t border-border pt-6">
              {project.stack.map((technology) => (
                <span
                  key={technology}
                  className="rounded-md border border-border bg-background px-2.5 py-1.5 font-mono text-xs text-muted-foreground"
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