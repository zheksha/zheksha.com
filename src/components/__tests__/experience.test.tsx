import { render, screen } from "@testing-library/react"

import { Experience } from "@/components/experience"
import resumeData from "@/mock-data/resume-data"

describe("Experience", () => {
  it("renders all experience companies", () => {
    render(<Experience />)

    resumeData.experience.forEach((item) => {
      expect(screen.getByText(item.company)).toBeInTheDocument()
    })
  })
})
