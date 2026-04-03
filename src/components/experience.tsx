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
    <Section title="Experience" subtitle="Work & Impact">
      <div className="space-y-6">
        {resumeData.experience.map((item, index) => {
          const isCurrent = item.endDate === "Present"
          const showLine = index < resumeData.experience.length - 1

          return (
            <div key={item.id} className="relative">
              {showLine && <div className="absolute left-6 top-12 bottom-0 w-px bg-border" />}
              <div
                className={`absolute left-6 top-10 -translate-x-1/2 h-3 w-3 rounded-full border-2 border-background ${
                  isCurrent
                    ? "bg-blue-500 shadow-[0_0_0_3px_rgba(59,130,246,0.2)]"
                    : "bg-muted-foreground/50"
                }`}
              />
              <div className="ml-12">
                <Card
                  className={`p-5 transition-colors duration-200 ${
                    isCurrent
                      ? "border-blue-500/30 bg-blue-500/5 hover:border-blue-500/50"
                      : "border-border/60 bg-card/80 hover:border-foreground/30"
                  }`}
                >
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                    <div className="space-y-1.5 min-w-0">
                      <div className="flex items-center gap-2.5 flex-wrap">
                        {item.logo && (
                          <img
                            src={item.logo}
                            alt={`${item.company} logo`}
                            className="h-5 rounded-sm border border-border/60 bg-background object-contain"
                          />
                        )}
                        <h3 className="text-base font-semibold text-foreground">{item.company}</h3>
                        {isCurrent && (
                          <Badge className="rounded-full bg-blue-500/15 text-blue-400 border-blue-500/30 text-[10px] px-2 py-0 h-4">
                            Current
                          </Badge>
                        )}
                      </div>

                      <div className="flex flex-wrap items-center gap-x-2 gap-y-0.5 text-sm">
                        <span className="font-medium text-foreground">{item.title}</span>
                        <span className="text-muted-foreground/40">·</span>
                        <span className="text-muted-foreground">
                          {formatDateRange(item.startDate, item.endDate)}
                        </span>
                        <span className="text-muted-foreground/40">·</span>
                        <span className="text-muted-foreground">{item.employmentType}</span>
                      </div>

                      {item.location && (
                        <p className="text-xs text-muted-foreground/70">{item.location}</p>
                      )}
                    </div>
                  </div>

                  {item.achievements.length > 0 && (
                    <ul className="mt-4 list-disc space-y-1.5 pl-4 text-sm text-muted-foreground marker:text-muted-foreground/40">
                      {item.achievements.map((achievement, achievementIndex) => (
                        <li key={`${item.id}-${achievementIndex}`} className="pl-1">
                          {achievement}
                        </li>
                      ))}
                      {item.highlights && item.highlights.length > 0 && (
                        <li className="pl-1">
                          {item.hightlightsMessage ?? "The most prominent work includes:"}
                          <ul className="mt-2 list-[circle] space-y-1.5 pl-5">
                            {item.highlights.map((highlight) => (
                              <li key={highlight.name}>
                                <span className="font-medium text-foreground/90">
                                  {highlight.name}
                                </span>
                                {highlight.description ? ` — ${highlight.description}` : ""}
                              </li>
                            ))}
                          </ul>
                        </li>
                      )}
                    </ul>
                  )}

                  {item.technologies.length > 0 && (
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {item.technologies.map((tech) => (
                        <Badge
                          key={`${item.id}-${tech}`}
                          variant="secondary"
                          className="rounded-full text-xs px-2.5 py-0.5"
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
