import { Section } from "@/components/section"
import resumeData from "@/mock-data/resume-data"

function Summary() {
  return (
    <Section title="About" id="summary">
      <p className="text-sm text-muted-foreground leading-relaxed px-4">{resumeData.objective}</p>
    </Section>
  )
}

export { Summary }
