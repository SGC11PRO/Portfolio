import { GraduationCap } from "lucide-react"
import { Section } from "./section"
import { education } from "@/lib/portfolio-data"

export function Education() {
  return (
    <Section id="education" title="Education">
      <ol className="flex flex-col gap-4">
        {education.map((item) => (
          <li
            key={item.degree}
            className="grid rounded-xl border border-border bg-card/40 p-5 lg:grid-cols-[140px_1fr] lg:gap-6"
          >
            <p className="mb-2 font-mono text-xs uppercase tracking-wider text-muted-foreground lg:mb-0 lg:pt-1">
              {item.period}
            </p>
            <div>
              <h3 className="flex items-center gap-2 font-medium text-foreground text-pretty">
                <GraduationCap className="size-4 shrink-0 text-primary" aria-hidden="true" />
                {item.degree}
              </h3>
              <p className="mt-1 text-sm font-medium text-primary/90">{item.school}</p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground text-pretty">{item.detail}</p>
              <ul className="mt-3 flex flex-wrap gap-2">
                {item.tags.map((tag) => (
                  <li key={tag} className="rounded-full bg-primary/10 px-3 py-1 font-mono text-xs text-primary">
                    {tag}
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  )
}
