import { defineConfig } from "@playwright/test"

export default defineConfig({
  testDir: "e2e",
  reporter: [["html", { open: "never" }], ["junit", { outputFile: "test-results/e2e-junit.xml" }]],
  use: {
    baseURL: process.env.BASE_URL || "http://localhost:4173",
  },
  webServer: {
    command: "npm run build && npm run preview -- --host --port 4173",
    url: "http://localhost:4173",
    reuseExistingServer: !process.env.CI,
  },
})

