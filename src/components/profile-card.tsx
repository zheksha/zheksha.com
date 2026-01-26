import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

import { Badge } from "./ui/badge"
import { BorderBeam } from "./ui/border-beam"

type ProfileCardProps = {
  name: string
  title: string
  email: string
  linkedInUrl: string
  githubUrl: string
  imageUrl: string
}

function ProfileCard({
  name,
  title,
  email,
  linkedInUrl,
  githubUrl,
  imageUrl,
}: ProfileCardProps) {
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
                <Badge className="rounded-sm bg-green-500/20 text-green-400 border-green-500/30" >
       <span
        className={`h-1.5 w-1.5 rounded-full bg-green-400 `}
      />
        Active
      </Badge>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-2 text-sm">
        <a className="block text-foreground hover:underline" href={`mailto:${email}`}>
          {email}
        </a>
        <a className="block text-foreground hover:underline" href={linkedInUrl}>
         LinkedIn
        </a>
        <a className="block text-foreground hover:underline" href={githubUrl}>
          GitHub
        </a>
      </CardContent>
      <CardFooter className="text-xs text-muted-foreground">
        <span>Open to collaboration</span>
      </CardFooter>
      <BorderBeam />
    </Card>
  )
}

export { ProfileCard }
