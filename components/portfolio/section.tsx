import type { ReactNode } from "react"

export function Section({
  id,
  title,
  children,
}: {
  id: string
  title: string
  children: ReactNode
}) {
  return (
    <section id={id} aria-labelledby={`${id}-heading`} className="scroll-mt-16 py-12 lg:py-20">
      <div className="sticky top-0 z-10 -mx-6 mb-6 bg-background/80 px-6 py-4 backdrop-blur lg:relative lg:top-auto lg:mx-0 lg:bg-transparent lg:px-0 lg:py-0 lg:backdrop-blur-none">
        <h2
          id={`${id}-heading`}
          className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-foreground lg:hidden"
        >
          {title}
        </h2>
      </div>
      <h2 className="sr-only lg:not-sr-only lg:mb-8 lg:font-mono lg:text-xs lg:font-semibold lg:uppercase lg:tracking-[0.2em] lg:text-muted-foreground">
        {title}
      </h2>
      {children}
    </section>
  )
}
