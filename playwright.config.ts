import { defineConfig } from "@playwright/test"

export default defineConfig({
  testDir: "e2e",
  use: {
    baseURL: process.env.BASE_URL || "http://localhost:4173",
  },
  webServer: {
    command: "npm run build && npm run preview -- --host --port 4173",
    url: "http://localhost:4173",
    reuseExistingServer: !process.env.CI,
  },
})

