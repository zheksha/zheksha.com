import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

import { Badge } from "./ui/badge"
import { BorderBeam } from "./ui/border-beam"

type ProfileCardProps = {
  name: string
  email: string
  linkedInUrl: string
  githubUrl: string
  imageUrl: string
}

function ProfileCard({ name, email, linkedInUrl, githubUrl, imageUrl }: ProfileCardProps) {
  return (
    <Card className="bg-background/60 relative">
      <CardHeader className="gap-4">
        <div className="flex items-center gap-4">
          <img
            src={imageUrl}
            alt={`${name} profile`}
            className="h-16 w-16 rounded-full object-cover"
          />

          <div className="min-w-0">
            <CardTitle className="text-lg">{name}</CardTitle>
            <Badge className="rounded-sm bg-green-500/20 text-green-400 border-green-500/30">
              <span className={`h-1.5 w-1.5 rounded-full bg-green-400 `} />
              Active
            </Badge>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-2 text-sm">
        <a
          className="block text-foreground hover:underline"
          target="_blank"
          href={`mailto:${email}`}
        >
          {email}
        </a>
        <a className="block text-foreground hover:underline" href={linkedInUrl} target="_blank">
          LinkedIn
        </a>
        <a className="block text-foreground hover:underline" href={githubUrl} target="_blank">
          GitHub
        </a>
      </CardContent>
      <CardFooter className="text-xs text-muted-foreground">
        <span>Get in touch</span>
      </CardFooter>
      <BorderBeam />
    </Card>
  )
}

export { ProfileCard }
