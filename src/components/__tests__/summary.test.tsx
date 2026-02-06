import { render, screen } from "@testing-library/react"

import { Summary } from "@/components/summary"
import resumeData from "@/mock-data/resume-data"

describe("Summary", () => {
  it("renders objective text from resume data", () => {
    render(<Summary />)

    expect(screen.getByText(resumeData.objective)).toBeInTheDocument()
  })
})
