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
        <main className="flex-1 overflow-hidden py-1">
          <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-3 px-6 py-2 md:grid-cols-4">
            <aside className="md:col-span-1 md:sticky ">
              <ProfileCard
                name="Ulan Z."
                email="zheksha@gmail.com"
                linkedInUrl="https://www.linkedin.com/in/zheksha/"
                githubUrl="https://github.com/zheksha"
                imageUrl="https://media.licdn.com/dms/image/v2/C5603AQHFYmtLd6eCrw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1616700061492?e=1770854400&v=beta&t=v2kzt6OltSRMivgRC1tZ3fonYMntiWsNu5F2MmdyvQ4"
              />
            </aside>
            <section className="md:col-span-3 border-y">
              <div ref={scrollWrapperRef} className="max-h-[calc(100dvh-11rem)] overflow-hidden">
                <div ref={scrollContentRef} className="space-y-3">
                  <Summary />
                  <Experience />
                </div>
              </div>
            </section>
          </div>
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default App
