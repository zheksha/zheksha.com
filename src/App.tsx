import { ModeToggle } from "@/components/theme-provider/mode-toggle"
import { Wrapper } from "@/components/wrapper"

import { ThemeProvider } from "./components/theme-provider/theme-provider"

export function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Wrapper>
        <ModeToggle />
      </Wrapper>
    </ThemeProvider>
  )
}

export default App
