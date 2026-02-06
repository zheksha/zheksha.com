import { render, screen } from "@testing-library/react"

import { ProfileCard } from "@/components/profile-card"

describe("ProfileCard", () => {
  it("renders name and links", () => {
    render(
      <ProfileCard
        name="Test User"
        email="test@example.com"
        linkedInUrl="https://linkedin.com/in/test"
        githubUrl="https://github.com/test"
        imageUrl="https://example.com/avatar.png"
      />,
    )

    expect(screen.getByText("Test User")).toBeInTheDocument()
    expect(screen.getByRole("link", { name: "test@example.com" })).toHaveAttribute(
      "href",
      "mailto:test@example.com",
    )
    expect(screen.getByRole("link", { name: "LinkedIn" })).toHaveAttribute(
      "href",
      "https://linkedin.com/in/test",
    )
    expect(screen.getByRole("link", { name: "GitHub" })).toHaveAttribute(
      "href",
      "https://github.com/test",
    )
  })
})
