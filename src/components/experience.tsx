import { Section } from "@/components/section"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import resumeData from "@/mock-data/resume-data"

function formatMonthYear(value: string) {
  const [year, month] = value.split("-").map(Number)
  if (!year || !month) return value
  const date = new Date(year, month - 1, 1)
  return new Intl.DateTimeFormat("en-US", { month: "short", year: "numeric" }).format(date)
}

function formatDateRange(start: string, end: string) {
  const startLabel = formatMonthYear(start)
  const endLabel = end === "Present" ? "Present" : formatMonthYear(end)
  return `${startLabel} – ${endLabel}`
}

export function Experience() {
  return (
    <Section title="Experience" subtitle="Work & Impact" footer="View All">
      <div className="space-y-8">
        {resumeData.experience.map((item, index) => {
          const showLine = index < resumeData.experience.length

          return (
            <div key={item.id} className="relative">
              {showLine && (
                <div className="absolute left-6 top-12 bottom-0 w-px bg-border transition-colors group-hover:bg-muted-foreground/40" />
              )}
              <div className="absolute left-6 top-10 -translate-x-1/2 h-3 w-3 rounded-full border-4 border-background bg-foreground" />
              <div className="ml-12">
                <Card className="border-border/60 bg-card/80 p-6 transition-colors duration-200 hover:border-foreground/50">
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                    <div className="space-y-1">
                      <div className="flex items-center gap-3">
                        {item.logo && (
                          <img
                            src={item.logo}
                            alt={`${item.company} logo`}
                            className="h-6 rounded-xs border border-border/60 bg-background object-contain"
                          />
                        )}
                        <h3 className="text-lg font-semibold text-foreground">{item.company}</h3>
                      </div>
                      <div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
                        <span className="font-medium text-foreground">{item.title}</span>
                        <span className="text-muted-foreground/60">•</span>
                        <span>{formatDateRange(item.startDate, item.endDate)}</span>
                      </div>
                      {item.location && (
                        <div className="text-sm text-muted-foreground">
                          {item.location}
                          {item.employmentType ? ` · ${item.employmentType}` : ""}
                        </div>
                      )}
                    </div>
                  </div>

                  {item.achievements.length > 0 && (
                    <div className="mt-4 space-y-3">
                      <ul className="list-disc space-y-2 pl-4 text-sm text-muted-foreground">
                        {item.achievements.map((achievement, achievementIndex) => (
                          <li key={`${item.id}-${achievementIndex}`} className="pl-1">
                            {achievement}
                          </li>
                        ))}
                        {item.highlights && item.highlights.length > 0 && (
                          <li className="pl-1">
                            {item.hightlightsMessage ?? "The most prominent work includes:"}
                            <ul className="mt-2 list-[circle] space-y-2 pl-6">
                              {item.highlights.map((highlight) => (
                                <li key={highlight.name}>
                                  <span className="font-medium text-foreground">
                                    {highlight.name}
                                  </span>
                                  {highlight.description ? `, ${highlight.description}` : ""}
                                </li>
                              ))}
                            </ul>
                          </li>
                        )}
                      </ul>
                    </div>
                  )}

                  {item.technologies.length > 0 && (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {item.technologies.map((tech) => (
                        <Badge
                          key={`${item.id}-${tech}`}
                          variant="secondary"
                          className="rounded-full"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  )}
                </Card>
              </div>
            </div>
          )
        })}
      </div>
    </Section>
  )
}
