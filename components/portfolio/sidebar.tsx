"use client"

import { useEffect, useState } from "react"
import { Shield, Mail } from "lucide-react"
import { GithubIcon, LinkedinIcon } from "./brand-icons"
import { profile, navItems } from "@/lib/portfolio-data"
import { cn } from "@/lib/utils"

export function Sidebar() {
  const [activeId, setActiveId] = useState<string>("about")

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => el !== null)

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        }
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 },
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault()
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  return (
    <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-[44%] lg:flex-col lg:justify-between lg:py-24">
      <div>
        <div className="flex items-center gap-3">
          <span className="flex size-10 items-center justify-center rounded-lg border border-border bg-card text-primary">
            <Shield className="size-5" aria-hidden="true" />
          </span>
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
            {profile.location}
          </span>
        </div>

        <h1 className="mt-8 text-4xl font-bold tracking-tight text-foreground text-balance sm:text-5xl">
          {profile.name}
        </h1>
        <h2 className="mt-3 text-lg font-medium text-primary">{profile.role}</h2>
        <p className="mt-4 max-w-sm leading-relaxed text-muted-foreground text-pretty">{profile.tagline}</p>

        <nav className="mt-16 hidden lg:block" aria-label="In-page navigation">
          <ul className="flex flex-col gap-4">
            {navItems.map((item) => {
              const isActive = activeId === item.id
              return (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    onClick={(e) => handleNavClick(e, item.id)}
                    className="group flex items-center gap-4 py-1"
                  >
                    <span
                      className={cn(
                        "h-px bg-muted-foreground/40 transition-all duration-300 group-hover:w-16 group-hover:bg-foreground",
                        isActive ? "w-16 bg-primary" : "w-8",
                      )}
                    />
                    <span
                      className={cn(
                        "font-mono text-xs uppercase tracking-[0.18em] transition-colors duration-300 group-hover:text-foreground",
                        isActive ? "text-primary" : "text-muted-foreground",
                      )}
                    >
                      {item.label}
                    </span>
                  </a>
                </li>
              )
            })}
          </ul>
        </nav>
      </div>

      <ul className="mt-10 flex items-center gap-5" aria-label="Social links">
        <li>
          <a
            href={profile.socials.github}
            target="_blank"
            rel="noreferrer"
            className="text-muted-foreground transition-colors hover:text-primary"
            aria-label="GitHub"
          >
            <GithubIcon className="size-5" />
          </a>
        </li>
        <li>
          <a
            href={profile.socials.linkedin}
            target="_blank"
            rel="noreferrer"
            className="text-muted-foreground transition-colors hover:text-primary"
            aria-label="LinkedIn"
          >
            <LinkedinIcon className="size-5" />
          </a>
        </li>
        <li>
          <a
            href={`mailto:${profile.email}`}
            className="text-muted-foreground transition-colors hover:text-primary"
            aria-label="Email"
          >
            <Mail className="size-5" />
          </a>
        </li>
      </ul>
    </header>
  )
}
