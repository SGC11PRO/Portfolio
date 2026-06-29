import { Section } from "./section"
import { skillGroups } from "@/lib/portfolio-data"

export function Skills() {
  return (
    <Section id="skills" title="Skills">
      <div className="grid gap-6 sm:grid-cols-2">
        {skillGroups.map((group) => (
          <div key={group.category} className="rounded-xl border border-border bg-card/40 p-5">
            <h3 className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-primary">
              {group.category}
            </h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="rounded-md border border-border bg-secondary/50 px-3 py-1.5 text-sm text-secondary-foreground"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  )
}
