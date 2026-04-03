import { useEffect, useRef } from "react"
import Lenis from "lenis"

import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { ProfileCard } from "@/components/profile-card"

import { Experience } from "./components/experience"
import { Summary } from "./components/summary"
import { ThemeProvider } from "./components/theme-provider/theme-provider"

export function App() {
  const scrollWrapperRef = useRef<HTMLDivElement>(null)
  const scrollContentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const wrapper = scrollWrapperRef.current
    const content = scrollContentRef.current
    if (!wrapper || !content) return

    const lenis = new Lenis({
      wrapper,
      content,
      smoothWheel: true,
    })

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
        <main className="flex-1 overflow-hidden">
          <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-6 px-6 py-6 md:grid-cols-4">
            <aside className="md:col-span-1 md:sticky md:top-20 md:self-start">
              <ProfileCard
                name="Ulan Z."
                title="Senior UI Engineer"
                email="zheksha@gmail.com"
                linkedInUrl="https://www.linkedin.com/in/zheksha/"
                githubUrl="https://github.com/zheksha"
              />
            </aside>
            <div className="md:col-span-3">
              <div ref={scrollWrapperRef} className="max-h-[calc(100dvh-8rem)] overflow-hidden">
                <div ref={scrollContentRef} className="divide-y">
                  <Summary />
                  <Experience />
                </div>
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
