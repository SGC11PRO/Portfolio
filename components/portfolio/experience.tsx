import { ArrowUpRight } from "lucide-react"
import { Section } from "./section"
import { experience } from "@/lib/portfolio-data"

export function Experience() {
  return (
    <Section id="experience" title="Experience">
      <ol className="flex flex-col gap-3">
        {experience.map((job) => (
          <li key={job.role}>
            <a
              href={job.companyUrl}
              target="_blank"
              rel="noreferrer"
              className="group grid rounded-xl border border-transparent p-5 transition-all hover:border-border hover:bg-card/60 lg:grid-cols-[140px_1fr] lg:gap-6"
            >
              <p className="mb-2 font-mono text-xs uppercase tracking-wider text-muted-foreground lg:mb-0 lg:pt-1">
                {job.period}
              </p>
              <div>
                <h3 className="flex items-center gap-1 font-medium text-foreground">
                  {job.role} · {job.company}
                  <ArrowUpRight className="size-4 text-primary opacity-0 transition-all group-hover:translate-x-0.5 group-hover:opacity-100" />
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground text-pretty">{job.description}</p>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {job.tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-full bg-primary/10 px-3 py-1 font-mono text-xs text-primary"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>
            </a>
          </li>
        ))}
      </ol>
    </Section>
  )
}
