const { execSync } = require("node:child_process")
const { writeFileSync } = require("node:fs")
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

const lines = [`VITE_GIT_COMMIT_HASH=${commitHash}`, `VITE_APP_VERSION=${version}`, ""]

writeFileSync(path.join(process.cwd(), ".env.local"), lines.join("\n"), "utf8")
