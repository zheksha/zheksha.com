import { ExternalLink, Mail, MapPin } from "lucide-react"

import { Badge } from "./ui/badge"
import { BorderBeam } from "./ui/border-beam"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { ContactDrawer } from "./contact-drawer"
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
    <Card className="bg-background/60 relative overflow-hidden">
      <CardHeader className="pb-4">
        <div className="flex flex-col items-center text-center gap-3">
          <div className="h-20 w-20 rounded-full bg-gradient-to-br from-blue-500 via-violet-500 to-indigo-600 flex items-center justify-center ring-4 ring-background shadow-xl">
            <span className="text-white font-bold text-2xl tracking-wide select-none">
              {initials}
            </span>
          </div>

          <div className="space-y-0.5">
            <h2 className="text-xl font-bold tracking-tight">{name}</h2>
            {title && <p className="text-sm font-medium text-muted-foreground">{title}</p>}
            <div className="flex items-center justify-center gap-1 text-xs text-muted-foreground pt-0.5">
              <MapPin className="h-3 w-3 shrink-0" />
              <span>{resumeData.personalInfo.location}</span>
            </div>
          </div>

          <Badge className="rounded-full bg-green-500/15 text-green-400 border-green-500/30 px-3 py-0.5 text-xs">
            <span className="h-1.5 w-1.5 rounded-full bg-green-400 mr-1.5 animate-pulse" />
            Open to Work
          </Badge>
        </div>
      </CardHeader>

      <CardContent className="space-y-4 pt-0">
        <div className="space-y-2.5">
          <a
            className="flex items-center gap-2.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
            target="_blank"
            href={`mailto:${email}`}
          >
            <Mail className="h-4 w-4 shrink-0" />
            <span className="truncate">{email}</span>
          </a>
          <a
            className="flex items-center gap-2.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
            href={linkedInUrl}
            target="_blank"
          >
            <ExternalLink className="h-4 w-4 shrink-0" />
            <span>LinkedIn</span>
          </a>
          <a
            className="flex items-center gap-2.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
            href={githubUrl}
            target="_blank"
          >
            <ExternalLink className="h-4 w-4 shrink-0" />
            <span>GitHub</span>
          </a>
        </div>

        <div className="border-t" />

        <div>
          <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground mb-2">
            Skills
          </p>
          <div className="flex flex-wrap gap-1.5">
            {topSkills.map((skill) => (
              <Badge key={skill} variant="secondary" className="rounded-full text-xs px-2.5 py-0.5">
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </CardContent>

      <CardFooter className="pt-0">
        <ContactDrawer />
      </CardFooter>

      <BorderBeam />
    </Card>
  )
}

export { ProfileCard }
