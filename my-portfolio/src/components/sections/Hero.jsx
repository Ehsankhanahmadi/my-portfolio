import { motion } from "motion/react";
import Button from "../ui/Button";
// import StatusIndicator from "../ui/StatusIndicator";
import TerminalAnimation from "../ui/TerminalAnimation";

const architectureItems = [
  {
    name: "api",
    technology: "django-rest",
  },
  {
    name: "workers",
    technology: "celery",
  },
  {
    name: "database",
    technology: "postgresql",
  },
  {
    name: "queue",
    technology: "rabbitmq",
  },
  {
    name: "storage",
    technology: "minio",
  },
];



export default function Hero() {
  return (
    <section
      id="hero"
      className="relative isolate mx-auto flex min-h-[calc(100svh-4rem)] max-w-300 items-center overflow-visible px-6 py-16 sm:py-20 lg:px-8"
    >
      <TerminalAnimation />
      <div className="relative z-10 grid w-full items-center gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12">
        {/* Hero Content */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          {/* <StatusIndicator /> */}

          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.08, ease: "easeOut" }}
            className="mt-6 max-w-3xl font-mono text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-6xl"
          >
            Ehsan Khanahmadi
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.16, ease: "easeOut" }}
            className="mt-6 max-w-2xl text-xl leading-relaxed text-muted-foreground sm:text-2xl"
          >
            Backend-focused developer building reliable systems, APIs &
            developer tools.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.24, ease: "easeOut" }}
            className="mt-5 font-mono text-sm text-muted-foreground"
          >
            Python · Django · DRF · PostgreSQL
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.32, ease: "easeOut" }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <Button href="#projects">View Projects</Button>

            <Button
              href="https://github.com/EhsanKhanahmadi"
              variant="secondary"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </Button>
          </motion.div>
        </motion.div>

        {/* Architecture Visual */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="w-full"
        >
          <div className="overflow-hidden rounded-lg border border-border bg-surface">
            {/* Window Header */}
            <div className="flex items-center gap-2 border-b border-border px-4 py-3">
              <span
                className="h-2.5 w-2.5 rounded-full bg-border"
                aria-hidden="true"
              />
              <span
                className="h-2.5 w-2.5 rounded-full bg-border"
                aria-hidden="true"
              />
              <span
                className="h-2.5 w-2.5 rounded-full bg-border"
                aria-hidden="true"
              />

              <span className="ml-2 font-mono text-xs text-muted-foreground">
                architecture
              </span>
            </div>

            {/* Architecture Content */}
            <div className="p-5 sm:p-8">
              <div className="font-mono text-sm">
                <div className="text-accent">backend/</div>

                <div className="mt-3 space-y-2">
                  {architectureItems.map((item, index) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: -8 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        duration: 0.35,
                        delay: 0.45 + index * 0.06,
                      }}
                      className="flex items-center gap-2"
                    >
                      <span className="text-border" aria-hidden="true">
                        {index === architectureItems.length - 1 ? "└──" : "├──"}
                      </span>

                      <span className="text-foreground">{item.name}/</span>

                      <span className="text-muted-foreground">
                        {item.technology}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="mt-8 border-t border-border pt-5">
                <p className="font-mono text-xs leading-relaxed text-muted-foreground">
                  Designing backend systems with a focus on reliability,
                  scalability and clean architecture.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}