import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"

type SectionProps = {
  title: string
  subtitle?: string
  footer?: React.ReactNode
  className?: string
  children: React.ReactNode
}

function Section({ title, subtitle, footer, className, children }: SectionProps) {
  return (
    <section className={cn("w-full border", className)}>
      <Card className="bg-background/60 ring-0">
        <CardHeader>
          <CardTitle>
            {title}
            {subtitle && <span className="text-muted-foreground"> | {subtitle}</span>}
          </CardTitle>
        </CardHeader>
        <CardContent>{children}</CardContent>
        {footer && <CardFooter className="text-xs text-muted-foreground">{footer}</CardFooter>}
      </Card>
    </section>
  )
}

export { Section }
