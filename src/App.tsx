import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { ProfileCard } from "@/components/profile-card"

import { Experience } from "./components/experience"
import { ThemeProvider } from "./components/theme-provider/theme-provider"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./components/ui/card"

export function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="min-h-screen bg-background text-foreground flex flex-col">
        <Header />
        <main className="flex-1 overflow-hidden py-6">
          <div className="mx-auto grid w-full max-w-6xl grid-cols-4 gap-4 px-6 py-4">
            <div className="md:col-span-1 col-span-4 self-start sticky top-24">
              <ProfileCard
                name="Ulan Z."
                title="Developer"
                email="ulan@example.com"
                linkedInUrl="https://www.linkedin.com/in/ulan"
                githubUrl="https://github.com/ulan"
                imageUrl="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=256&h=256&fit=crop&auto=format"
              />
            </div>
            <div className="md:col-span-3 col-span-4 overflow-y-auto border ">
              <Card className="bg-background/60 w-full">
                <CardHeader>
                  <CardTitle>Experience</CardTitle>
                </CardHeader>
                <CardContent>
                  <Experience />
                </CardContent>
                <CardFooter className="text-xs text-muted-foreground">View All</CardFooter>
              </Card>

            </div>
          </div>
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default App
