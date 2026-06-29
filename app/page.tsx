import { Sidebar } from "@/components/portfolio/sidebar"
import { About } from "@/components/portfolio/about"
import { Experience } from "@/components/portfolio/experience"
import { Projects } from "@/components/portfolio/projects"
import { Skills } from "@/components/portfolio/skills"
import { Education } from "@/components/portfolio/education"
import { Contact } from "@/components/portfolio/contact"
import { profile } from "@/lib/portfolio-data"

export default function Page() {
  return (
    <div className="relative min-h-screen">
      {/* subtle ambient glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 -z-10"
        style={{
          backgroundImage:
            "radial-gradient(600px circle at 0% 0%, oklch(0.82 0.13 185 / 7%), transparent 55%)",
        }}
      />
      <div className="mx-auto max-w-6xl px-6 lg:px-12">
        <div className="lg:flex lg:justify-between lg:gap-12">
          <Sidebar />
          <main className="pt-12 lg:w-[56%] lg:py-24" id="content">
            <About />
            <Experience />
            <Projects />
            <Skills />
            <Education />
            <Contact />
            <footer className="py-10 text-sm text-muted-foreground">
              <p className="text-pretty">
                Designed &amp; built by {profile.name}. Crafted with Next.js and Tailwind CSS.
              </p>
            </footer>
          </main>
        </div>
      </div>
    </div>
  )
}
