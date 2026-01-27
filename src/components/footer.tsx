import { cn } from "@/lib/utils"

type FooterProps = React.ComponentProps<"footer">

function Footer({ className, ...props }: FooterProps) {
  return (
    <footer className={cn("border-t bg-background text-muted-foreground", className)} {...props}>
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-2 px-6 py-6 text-sm sm:flex-row sm:items-center sm:justify-between">
        <span>© {new Date().getFullYear()} Zheksha</span>
        <div className="flex items-center gap-4">
          <a className="hover:text-foreground transition-colors" href="#privacy">
            Privacy
          </a>
          <a className="hover:text-foreground transition-colors" href="#terms">
            Terms
          </a>
        </div>
      </div>
    </footer>
  )
}

export { Footer }
