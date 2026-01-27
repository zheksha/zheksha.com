import { Section } from "@/components/section"
import resumeData from "@/mock-data/resume-data"

function Summary() {
  return (
    <Section title="Summary" subtitle="Hello World">
      <p className="text-sm text-muted-foreground px-4">{resumeData.objective}</p>
    </Section>
  )
}

export { Summary }
