import { Section } from "@/components/section"
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
    <Section title="Experience" subtitle="Work &amp; Impact" id="experience">
      <div className="relative space-y-3">
        {resumeData.experience.map((item, index) => {
          const isCurrent = item.endDate === "Present"
          const isLast = index === resumeData.experience.length - 1

          return (
            <div key={item.id} className="relative flex gap-4">
              {/* Timeline spine */}
              <div className="flex flex-col items-center">
                <div
                  className={[
                    "mt-5 h-2.5 w-2.5 shrink-0 rounded-full border border-background z-10",
                    isCurrent
                      ? "bg-accent shadow-[0_0_8px_2px_rgba(0,137,255,0.25)]"
                      : "bg-foreground/20",
                  ].join(" ")}
                />
                {!isLast && (
                  <div className="mt-1 flex-1 w-px bg-gradient-to-b from-border to-transparent min-h-4" />
                )}
              </div>

              {/* Card */}
              <div className="flex-1 pb-1">
                <div
                  className={[
                    "rounded-sm border p-4 transition-all duration-200",
                    isCurrent
                      ? "bg-accent/[0.04] border-accent/20 hover:border-accent/35"
                      : "bg-card border-border hover:border-foreground/20",
                  ].join(" ")}
                >
                  {/* Company + role row */}
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
                    <div className="space-y-1 min-w-0">
                      {/* Company line */}
                      <div className="flex items-center gap-2 flex-wrap">
                        {item.logo && (
                          <img
                            src={item.logo}
                            alt={`${item.company} logo`}
                            className="h-4 rounded-sm border border-border bg-muted/30 object-contain"
                          />
                        )}
                        <span className="font-sans text-sm font-medium text-foreground">
                          {item.company}
                        </span>
                        {isCurrent && (
                          <span className="inline-flex items-center rounded-sm border border-accent/30 bg-accent/10 px-1.5 py-0 font-mono text-[9px] uppercase tracking-wider text-accent">
                            Current
                          </span>
                        )}
                      </div>

                      {/* Role + date + type */}
                      <div className="flex flex-wrap items-center gap-x-2 gap-y-0.5">
                        <span className="font-sans text-sm text-foreground/90">{item.title}</span>
                        <span className="text-foreground/20">·</span>
                        <span className="font-mono text-[11px] text-muted-foreground">
                          {formatDateRange(item.startDate, item.endDate)}
                        </span>
                        <span className="text-foreground/20">·</span>
                        <span className="font-mono text-[11px] text-muted-foreground">
                          {item.employmentType}
                        </span>
                      </div>

                      {item.location && (
                        <p className="font-mono text-[10px] text-muted-foreground/60">
                          {item.location}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Achievements */}
                  {item.achievements.length > 0 && (
                    <ul className="mt-3 space-y-1.5 text-sm text-muted-foreground">
                      {item.achievements.map((achievement, i) => (
                        <li key={`${item.id}-ach-${i}`} className="flex gap-2">
                          <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-foreground/20" />
                          <span>{achievement}</span>
                        </li>
                      ))}
                      {item.highlights && item.highlights.length > 0 && (
                        <li className="flex gap-2">
                          <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-foreground/20" />
                          <span>
                            {item.hightlightsMessage ?? "The most prominent work includes:"}
                            <ul className="mt-2 space-y-1.5">
                              {item.highlights.map((highlight) => (
                                <li key={highlight.name} className="flex gap-2">
                                  <span className="mt-1.5 h-0.5 w-0.5 shrink-0 rounded-full bg-foreground/15" />
                                  <span>
                                    <span className="font-medium text-foreground/80">
                                      {highlight.name}
                                    </span>
                                    {highlight.description ? ` — ${highlight.description}` : ""}
                                  </span>
                                </li>
                              ))}
                            </ul>
                          </span>
                        </li>
                      )}
                    </ul>
                  )}

                  {/* Tech stack */}
                  {item.technologies.length > 0 && (
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {item.technologies.map((tech) => (
                        <span
                          key={`${item.id}-${tech}`}
                          className="inline-flex items-center rounded-sm border border-border bg-muted/40 px-2 py-0.5 font-mono text-[10px] text-muted-foreground hover:border-foreground/20 hover:text-foreground/80 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </Section>
  )
}
