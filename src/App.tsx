import { useEffect } from "react"
import Lenis from "lenis"

import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { ProfileCard } from "@/components/profile-card"

import { Experience } from "./components/experience"
import { Summary } from "./components/summary"
import { ThemeProvider } from "./components/theme-provider/theme-provider"

export function App() {
  useEffect(() => {
    // Smooth wheel on desktop only — let mobile use native touch scroll
    if (window.matchMedia("(pointer: coarse)").matches) return

    const lenis = new Lenis({ smoothWheel: true })

    let rafId = 0
    const raf = (time: number) => {
      lenis.raf(time)
      rafId = requestAnimationFrame(raf)
    }
    rafId = requestAnimationFrame(raf)

    return () => {
      cancelAnimationFrame(rafId)
      lenis.destroy()
    }
  }, [])

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="flex min-h-screen flex-col bg-background text-foreground">
        <Header />
        <main className="flex-1">
          <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-6 px-4 py-8 md:grid-cols-4 md:px-6">
            {/* Sidebar — sticky on desktop, normal flow on mobile */}
            <aside className="md:col-span-1 md:sticky md:top-20 md:self-start">
              <ProfileCard
                name="Ulan Z."
                title="Senior UI Engineer"
                email="zheksha@gmail.com"
                linkedInUrl="https://www.linkedin.com/in/zheksha/"
                githubUrl="https://github.com/zheksha"
              />
            </aside>

            {/* Main content — unrestricted height, page-level scroll */}
            <div className="md:col-span-3">
              <div className="divide-y divide-border/40">
                <Summary />
                <Experience />
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default App
