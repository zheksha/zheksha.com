import { cn } from "@/lib/utils"

type GitCommitHashProps = {
  abbreviated?: boolean
  className?: string
}

function getHash(abbreviated: boolean) {
  const rawHash = import.meta.env.VITE_GIT_COMMIT_HASH as string | undefined
  const hash = rawHash?.trim()
  if (!hash) return null
  return abbreviated ? hash.slice(0, 7) : hash
}

export function GitCommitHash({ abbreviated = false, className }: GitCommitHashProps) {
  const hash = getHash(abbreviated)

  if (!hash) return null

  return (
    <a
      className={cn("underline", className)}
      href={`https://github.com/zheksha/zheksha.com/tree/${hash}`}
      target="_blank"
      rel="noreferrer"
    >
      {hash}
    </a>
  )
}
