import { ModeToggle } from "@/components/theme-provider/mode-toggle"
import { cn } from "@/lib/utils"

type HeaderProps = React.ComponentProps<"header">

function Header({ className, ...props }: HeaderProps) {
  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full backdrop-blur-md",
        "bg-background/90 border-b border-border",
        className,
      )}
      {...props}
    >
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-3 md:px-6">
        {/* Wordmark */}
        <div className="flex flex-col leading-none">
          <span className="font-sans text-sm font-medium tracking-[0.15em] uppercase text-foreground">
            Ulan Z.
          </span>
          <span className="font-mono text-[10px] tracking-wider text-muted-foreground mt-0.5">
            Senior UI Engineer
          </span>
        </div>

        {/* Nav */}
        <nav className="flex items-center gap-6">
          <a
            className="hidden sm:block font-sans text-sm text-muted-foreground hover:text-foreground transition-colors duration-150"
            href="#experience"
          >
            Experience
          </a>
          <a
            className="hidden sm:block font-sans text-sm text-muted-foreground hover:text-foreground transition-colors duration-150"
            href="#summary"
          >
            About
          </a>
          <ModeToggle />
        </nav>
      </div>
    </header>
  )
}

export { Header }
