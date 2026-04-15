import { Github, Linkedin, Mail, MapPin } from "lucide-react"

import { ContactDrawer } from "./contact-drawer"
import { Badge } from "./ui/badge"
import resumeData from "@/mock-data/resume-data"

type ProfileCardProps = {
  name: string
  title?: string
  email: string
  linkedInUrl: string
  githubUrl: string
  imageUrl?: string
}

function ProfileCard({ name, title, email, linkedInUrl, githubUrl }: ProfileCardProps) {
  const initials = name
    .split(" ")
    .filter(Boolean)
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase()

  const topSkills = resumeData.technicalSkills.slice(0, 10)

  return (
    <div
      className={[
        "relative overflow-hidden rounded-sm",
        "bg-card border border-border",
        "shadow-[4px_4px_0px_0px_rgba(0,0,0,0.12)] dark:shadow-[4px_4px_0px_0px_rgba(0,0,0,0.5)]",
        /* Cyan glow — dark only */
        "dark:before:absolute dark:before:inset-0 dark:before:rounded-sm dark:before:pointer-events-none",
        "dark:before:bg-[radial-gradient(ellipse_120%_60%_at_50%_0%,rgba(0,255,255,0.04)_0%,transparent_60%)]",
      ].join(" ")}
    >
      {/* Avatar + identity */}
      <div className="flex flex-col items-center text-center gap-3 px-6 pt-8 pb-5">
        <div className="relative">
          <div className="h-[72px] w-[72px] rounded-full bg-gradient-to-br from-blue-600 via-cyan-500 to-indigo-600 flex items-center justify-center ring-2 ring-border">
            <span className="font-sans text-white font-medium text-xl tracking-wide select-none">
              {initials}
            </span>
          </div>
          {/* Live indicator */}
          <span className="absolute bottom-0.5 right-0.5 h-3 w-3 rounded-full bg-green-400 border-2 border-card" />
        </div>

        <div className="space-y-0.5">
          <h2 className="font-sans text-lg font-medium text-foreground tracking-tight">{name}</h2>
          {title && (
            <p className="font-mono text-xs text-muted-foreground tracking-wide">{title}</p>
          )}
          <div className="flex items-center justify-center gap-1 text-[11px] text-muted-foreground pt-0.5">
            <MapPin className="h-3 w-3 shrink-0" />
            <span className="font-mono">{resumeData.personalInfo.location}</span>
          </div>
        </div>

        <Badge className="rounded-full bg-green-500/10 text-green-600 dark:text-green-400 border border-green-500/30 px-3 py-0.5 text-[10px] font-mono tracking-wide">
          <span className="h-1.5 w-1.5 rounded-full bg-green-500 dark:bg-green-400 mr-1.5 animate-pulse inline-block" />
          Open to Work
        </Badge>
      </div>

      {/* Divider */}
      <div className="mx-6 h-px bg-border" />

      {/* Links */}
      <div className="px-6 py-4 space-y-2">
        <a
          className="flex items-center gap-2.5 text-xs text-muted-foreground hover:text-foreground transition-colors group"
          href={`mailto:${email}`}
        >
          <Mail className="h-3.5 w-3.5 shrink-0 text-accent/70 group-hover:text-accent transition-colors" />
          <span className="font-mono truncate">{email}</span>
        </a>
        <a
          aria-label="LinkedIn"
          className="flex items-center gap-2.5 text-xs text-muted-foreground hover:text-foreground transition-colors group"
          href={linkedInUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Linkedin className="h-3.5 w-3.5 shrink-0 text-accent/70 group-hover:text-accent transition-colors" />
          <span className="font-mono" aria-hidden>
            linkedin.com/in/zheksha
          </span>
        </a>
        <a
          aria-label="GitHub"
          className="flex items-center gap-2.5 text-xs text-muted-foreground hover:text-foreground transition-colors group"
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Github className="h-3.5 w-3.5 shrink-0 text-accent/70 group-hover:text-accent transition-colors" />
          <span className="font-mono" aria-hidden>
            github.com/zheksha
          </span>
        </a>
      </div>

      {/* Divider */}
      <div className="mx-6 h-px bg-border" />

      {/* Skills */}
      <div className="px-6 py-4">
        <p className="font-mono text-[9px] font-medium uppercase tracking-[0.2em] text-muted-foreground mb-2.5">
          Skills
        </p>
        <div className="flex flex-wrap gap-1.5">
          {topSkills.map((skill) => (
            <span
              key={skill}
              className="inline-flex items-center rounded-sm border border-border bg-muted/40 px-2 py-0.5 font-mono text-[10px] text-muted-foreground hover:border-foreground/20 hover:text-foreground transition-colors"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="px-6 pb-6 pt-2">
        <ContactDrawer />
      </div>
    </div>
  )
}

export { ProfileCard }
