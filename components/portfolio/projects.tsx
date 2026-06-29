import { ArrowUpRight } from "lucide-react"
import { GithubIcon } from "./brand-icons"
import { Section } from "./section"
import { projects } from "@/lib/portfolio-data"

export function Projects() {
  return (
    <Section id="projects" title="Projects">
      <div className="grid gap-4 sm:grid-cols-2">
        {projects.map((project) => (
          <article
            key={project.title}
            className="group flex flex-col rounded-xl border border-border bg-card/40 p-5 transition-all hover:border-primary/40 hover:bg-card/70"
          >
            <div className="flex items-start justify-between gap-3">
              <h3 className="font-medium text-foreground text-balance">{project.title.trim()}</h3>
              <div className="flex shrink-0 items-center gap-2">
                <a
                  href={project.repo}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`${project.title.trim()} repository`}
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  <GithubIcon className="size-4" />
                </a>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`${project.title.trim()} live link`}
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  <ArrowUpRight className="size-4" />
                </a>
              </div>
            </div>
            <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground text-pretty">
              {project.description}
            </p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <li key={tag} className="font-mono text-xs text-muted-foreground/80">
                  {tag}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </Section>
  )
}
