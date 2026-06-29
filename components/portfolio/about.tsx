import { Section } from "./section"
import { aboutParagraphs } from "@/lib/portfolio-data"

export function About() {
  return (
    <Section id="about" title="About">
      <div className="flex flex-col gap-4 leading-relaxed text-muted-foreground">
        {aboutParagraphs.map((paragraph, i) => (
          <p key={i} className="text-pretty">
            {paragraph}
          </p>
        ))}
      </div>
    </Section>
  )
}
