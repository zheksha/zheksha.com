import { Section } from "@/components/section"
import resumeData from "@/mock-data/resume-data"

function Summary() {
  return (
    <Section title="About" id="summary">
      <p className="font-sans text-sm leading-relaxed text-muted-foreground max-w-2xl">
        {resumeData.objective}
      </p>
    </Section>
  )
}

export { Summary }
