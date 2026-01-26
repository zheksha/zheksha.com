import { useEffect } from "react"

export function useGlobalStyles(styles: string, id: string) {
  useEffect(() => {
    if (typeof document === "undefined") return

    const existing = document.getElementById(id)
    if (existing) {
      if (existing.textContent !== styles) {
        existing.textContent = styles
      }
      return
    }

    const styleTag = document.createElement("style")
    styleTag.id = id
    styleTag.textContent = styles
    document.head.appendChild(styleTag)
  }, [styles, id])
}

