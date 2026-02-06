import { GitCommitHash } from "@/components/git-commit-hash"

type VersionProps = {
  showEnv?: boolean
  showVersion?: boolean
  abbreviatedHash?: boolean
  className?: string
}

function getVersion() {
  const rawVersion = import.meta.env.VITE_APP_VERSION as string | undefined
  return rawVersion?.trim()
}

function getEnv() {
  return import.meta.env.MODE
}

export function Version({
  showEnv = false,
  showVersion = true,
  abbreviatedHash = true,
  className,
}: VersionProps) {
  const version = getVersion()
  const env = getEnv()

  if (!showVersion) {
    return showEnv ? <span className={className}>{env}</span> : null
  }

  return (
    <span className={`font-mono ${className ?? ""}`.trim()}>
      {version ? `v${version}` : "v0.0.0"}{" "}
      <GitCommitHash
        abbreviated={abbreviatedHash}
        className="ml-2 underline-offset-4 hover:underline"
      />
      {showEnv && (
        <span className="ml-2 rounded-sm border px-1.5 py-0.5 text-[10px] uppercase">{env}</span>
      )}
    </span>
  )
}
