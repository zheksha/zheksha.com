const { execSync } = require("node:child_process")
const { existsSync, readFileSync, writeFileSync } = require("node:fs")
const path = require("node:path")

function getCommitHash() {
  try {
    return execSync("git rev-parse HEAD", { encoding: "utf8" }).trim()
  } catch {
    return ""
  }
}

function getAppVersion() {
  try {
    const pkg = require(path.join(process.cwd(), "package.json"))
    return pkg.version || ""
  } catch {
    return ""
  }
}

const commitHash = getCommitHash()
const version = getAppVersion()
const envPath = path.join(process.cwd(), ".env.local")

const existingLines = existsSync(envPath)
  ? readFileSync(envPath, "utf8")
      .split(/\r?\n/)
      .filter(Boolean)
  : []

const envMap = new Map()
existingLines.forEach((line) => {
  const [key, ...rest] = line.split("=")
  if (!key) return
  envMap.set(key, rest.join("="))
})

envMap.set("VITE_GIT_COMMIT_HASH", commitHash)
envMap.set("VITE_APP_VERSION", version)

const mergedLines = Array.from(envMap.entries()).map(([key, value]) => `${key}=${value ?? ""}`)
mergedLines.sort((a, b) => {
  if (a.startsWith("VITE_") && !b.startsWith("VITE_")) return -1
  if (!a.startsWith("VITE_") && b.startsWith("VITE_")) return 1
  return a.localeCompare(b)
})

writeFileSync(envPath, `${mergedLines.join("\n")}\n`, "utf8")
