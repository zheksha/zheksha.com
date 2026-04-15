import { cn } from "@/lib/utils"

import { PrivacyDrawer } from "./privacy-drawer"
import { Version } from "./version"

type FooterProps = React.ComponentProps<"footer">

function Footer({ className, ...props }: FooterProps) {
  return (
    <footer className={cn("border-t border-border bg-background", className)} {...props}>
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-2 px-4 py-5 md:px-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="space-y-0.5">
          <p className="font-mono text-[11px] text-muted-foreground">
            © {new Date().getFullYear()} Ulan Z. All rights reserved.
          </p>
          <Version showEnv={true} className="font-mono text-[10px] text-muted-foreground/40" />
        </div>

        <div className="flex items-center gap-5">
          <PrivacyDrawer />
          <a
            className="font-mono text-[11px] text-muted-foreground hover:text-foreground transition-colors"
            href="#terms"
          >
            Terms
          </a>
        </div>
      </div>
    </footer>
  )
}

export { Footer }
