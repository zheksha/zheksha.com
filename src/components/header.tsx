import { ModeToggle } from "@/components/theme-provider/mode-toggle"
import { cn } from "@/lib/utils"

type HeaderProps = React.ComponentProps<"header">

function Header({ className, ...props }: HeaderProps) {
  return (
    <header
      className={cn(
        "bg-background/80 text-foreground sticky top-0 z-50 w-full border-b backdrop-blur",
        className,
      )}
      {...props}
    >
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-3">
        <div className="flex flex-col leading-tight">
          <span className="text-sm font-bold tracking-widest uppercase">Ulan Z.</span>
          <span className="text-xs text-muted-foreground">Senior UI Engineer</span>
        </div>
        <nav className="flex items-center gap-6 text-sm text-muted-foreground">
          <a className="hidden sm:block hover:text-foreground transition-colors" href="#experience">
            Experience
          </a>
          <a className="hidden sm:block hover:text-foreground transition-colors" href="#summary">
            About
          </a>
          <ModeToggle />
        </nav>
      </div>
    </header>
  )
}

export { Header }
