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
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
        <div className="flex flex-col leading-tight">
          <span className="text-md font-semibold tracking-wide">ULAN Z.</span>
          <span className="text-sm text-muted-foreground">dev</span>
        </div>
        <nav className="flex items-center gap-6 text-sm text-muted-foreground">
          <a className="hover:text-foreground transition-colors" href="#work">
            Work
          </a>
          <a className="hover:text-foreground transition-colors" href="#about">
            About
          </a>
          <a className="hover:text-foreground transition-colors" href="#contact">
            Contact
          </a>
          <ModeToggle />
        </nav>
      </div>
    </header>
  )
}

export { Header }
