import Timeline, {
  TimelineItem,
  TimelineItemDate,
  TimelineItemDescription,
  TimelineItemTitle} from "./ui/timeline";

const timelineData = [

  {
    title: "Prototype Approval",
    description:
      "Client signed off on the high-fidelity designs and interactive prototype.",
    date: new Date("2023-02-01"),
    variant: "secondary" as const
  },

];

export function Experience() {
  return (<div >
    <Timeline orientation="vertical" alternating={false} alignment="bottom/right" className="w-full">
      {timelineData.map((item, idx) => (
        <TimelineItem key={idx} variant={item.variant} >
          <TimelineItemDate>{item.date.toDateString()}</TimelineItemDate>
          <TimelineItemTitle>{item.title}</TimelineItemTitle>
          <TimelineItemDescription>{item.description}</TimelineItemDescription>
        </TimelineItem>
      ))}
    </Timeline>
  </div>

  );
}
