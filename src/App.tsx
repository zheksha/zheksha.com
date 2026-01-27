import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { ProfileCard } from "@/components/profile-card"

import { Experience } from "./components/experience"
import { Summary } from "./components/summary"
import { ThemeProvider } from "./components/theme-provider/theme-provider"
import { Card } from "./components/ui/card"

export function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="flex min-h-screen flex-col bg-background text-foreground">
        <Header />
        <main className="flex-1 overflow-hidden py-6">
          <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-6 px-6 py-4 md:grid-cols-4">
            <aside className="md:col-span-1 md:sticky ">
              <ProfileCard
                name="Ulan Z."
                email="zheksha@gmail.com"
                linkedInUrl="https://www.linkedin.com/in/zheksha/"
                githubUrl="https://github.com/zheksha"
                imageUrl="https://media.licdn.com/dms/image/v2/C5603AQHFYmtLd6eCrw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1616700061492?e=1770854400&v=beta&t=v2kzt6OltSRMivgRC1tZ3fonYMntiWsNu5F2MmdyvQ4"
              />
            </aside>
            <section className="md:col-span-3   border-0!   space-y-6 overflow-y-auto ">
              <Summary />
              <Experience />
            </section>
          </div>
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default App
