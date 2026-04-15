import { cn } from "@/lib/utils"

type SectionProps = {
  title: string
  subtitle?: string
  footer?: React.ReactNode
  id?: string
  className?: string
  children: React.ReactNode
}

function Section({ title, subtitle, footer, id, className, children }: SectionProps) {
  return (
    <section id={id} className={cn("w-full py-8", className)}>
      {/* Section header */}
      <div className="mb-6">
        <div className="flex items-baseline gap-3">
          <h2 className="font-sans text-sm font-medium uppercase tracking-[0.12em] text-foreground">
            {title}
          </h2>
          {subtitle && (
            <span className="font-mono text-[10px] tracking-wider text-muted-foreground">
              {subtitle}
            </span>
          )}
        </div>
        {/* Accent underline */}
        <div className="mt-2 h-px w-full bg-gradient-to-r from-accent/50 via-border to-transparent" />
      </div>

      <div>{children}</div>

      {footer && <div className="mt-4 font-mono text-[10px] text-muted-foreground">{footer}</div>}
    </section>
  )
}

export { Section }
