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
    <section id={id} className={cn("w-full py-6", className)}>
      <div className="px-4 mb-4">
        <div className="flex items-baseline gap-2">
          <h2 className="text-base font-semibold tracking-tight">{title}</h2>
          {subtitle && (
            <span className="text-xs text-muted-foreground font-normal">{subtitle}</span>
          )}
        </div>
        <div className="mt-1 h-px w-8 bg-primary/40 rounded-full" />
      </div>
      <div className="px-4">{children}</div>
      {footer && <div className="px-4 mt-4 text-xs text-muted-foreground">{footer}</div>}
    </section>
  )
}

export { Section }
