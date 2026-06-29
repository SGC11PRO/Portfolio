import { Download, Mail } from "lucide-react"
import { Section } from "./section"
import { profile } from "@/lib/portfolio-data"

export function Contact() {
  return (
    <Section id="contact" title="Contact">
      <div className="rounded-2xl border border-border bg-card/40 p-8 text-center">
        <h3 className="text-2xl font-bold tracking-tight text-foreground text-balance">Let&apos;s work together</h3>
        <p className="mx-auto mt-3 max-w-md leading-relaxed text-muted-foreground text-pretty">
          I&apos;m actively looking for cybersecurity internships and junior roles. If you think I&apos;d be a good fit
          for your team, I&apos;d love to hear from you.
        </p>
        <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90 sm:w-auto"
          >
            <Mail className="size-4" />
            Get in touch
          </a>
          <a
            href={profile.cvUrl}
            download
            className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-border px-6 py-3 text-sm font-medium text-foreground transition-colors hover:border-primary hover:text-primary sm:w-auto"
          >
            <Download className="size-4" />
            Download CV
          </a>
        </div>
      </div>
    </Section>
  )
}
