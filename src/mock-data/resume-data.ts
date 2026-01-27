import BmoLogo from "@/assets/BMOLogo.svg"
import CaterpillarLogo from "@/assets/CaterpillarLogo.svg"
import PeaksoftLogo from "@/assets/PeaksoftLogo.svg"

// TypeScript Interface
export interface Resume {
  personalInfo: {
    name: string
    title: string
    email: string
    phone: string
    location: string
  }
  objective: string
  technicalSkills: string[]
  experience: Experience[]
  education: Education[]
}

export interface Experience {
  id: string
  title: string
  company: string
  logo?: string
  location: string
  employmentType: "Contract" | "FTE"
  startDate: string // YYYY-MM format
  endDate: string | "Present" // YYYY-MM format or "Present"
  technologies: string[]
  achievements: string[]
  highlights?: Highlight[]
  hightlightsMessage?: string
}

export interface Highlight {
  name: string
  description: string
}

export interface Education {
  institution: string
  degree: string
  location: string
  startYear: number
  endYear: number | "Present"
  status?: string
}

// Resume Data
export const resumeData: Resume = {
  personalInfo: {
    name: "Ulan Z.",
    title: "Software Engineer",
    email: "zheksha@gmail.com",
    phone: "(773) 817-5487",
    location: "Chicago, IL",
  },
  objective:
    "I design and build scalable, high-performance front-end systems for complex enterprise platforms. Using React, TypeScript, and cloud-integrated solutions, I turn business requirements into fast, accessible, and maintainable user experiences that deliver real value and ship with confidence.",
  technicalSkills: [
    "React.js",
    "TypeScript",
    "Redux",
    "Node.js",
    "Java",
    "AMPS",
    "FDC3",
    "WebSockets",
    "HERE (OpenFin)",
    "MongoDB",
    "RESTful",
    "Jest",
    "HTML",
    "CSS",
    "SASS",
    "Bootstrap",
    "Agile/Scrum",
    "Figma",
    "Adobe Creative Suite",
    "AdobeXD",
  ],
  experience: [
    {
      id: "bmo-2025",
      title: "SR. UI ENGINEER",
      company: "BMO",
      logo: BmoLogo,
      location: "Chicago, IL",
      employmentType: "Contract",
      startDate: "2025-07",
      endDate: "Present",
      technologies: [
        "React",
        "TypeScript",
        "Redux (Saga)",
        "AMPS",
        "WebSockets",
        "AG Grid",
        "React Form Hooks",
        "FDC3",
        "GitHub",
        "Jira",
        "HERE (OpenFin)",
      ],
      hightlightsMessage: "The most prominent work includes:",
      highlights: [
        {
          name: "Deal Details",
          description:
            "enables bankers to access Deal Highlights, Deal Team and the current Stage Tracker",
        },
        {
          name: "Deal Edit",
          description:
            "a form with validation to edit deal details. Liaised with AMPS admins on relevant topic creation",
        },
        {
          name: "Deal Workflows",
          description:
            "walks end-users through the process of deal development across deal stages in certain order. Offers 30+ individually created components with dynamic forms",
        },
      ],
      achievements: [
        "Was assigned to BMO X project, a suite of desktop apps for Banking, Client Management, and Surveillance lines of business",
        "Engineered and developed new features for Pipeline Management and Insights apps for Banking",
        "Implemented real-time communication using WebSockets and AMPS, enabling low-latency data streaming and event-driven workflows",
        "Delivered fully typed, maintainable, and scalable code, adhering to best practices, coding standards, and enterprise-level quality requirements",
        "Followed Agile principles with help of Jira",
        "Created fully typed React components for in-house UI library: Deal Profile, Stage Tracker, Deal Tiles, to name a few",
        "Negotiated UX team sign-offs for new components",
      ],
    },
    {
      id: "caterpillar-2021",
      title: "SOFTWARE ENGINEER",
      company: "Caterpillar Inc.",
      logo: CaterpillarLogo,
      location: "Chicago, IL (hybrid)",
      employmentType: "FTE",
      startDate: "2021-05",
      endDate: "2025-07",
      technologies: [
        "AWS",
        "Azure",
        "REST",
        "React",
        "TypeScript",
        "Redux (Saga)",
        "Grafana",
        "Python",
        "AG Grid",
        "Jest",
        "Testing Library",
      ],
      hightlightsMessage: "Developed, maintained and demoed new features for in-house apps:",
      highlights: [
        {
          name: "A-Dealer-UI",
          description:
            "a condition monitoring tool to track CAT equipment. Key features: User Preferences, Assets and Exceptions Modules, i18n (11 languages as of 2024), Bulk Actions accessibility feature, AI-powered Condition Monitoring Analysis Recommendation",
        },
        {
          name: "Visualization",
          description:
            "a data-rich charts-only app to visualize equipment conditions. Features: Fleet Views, Marine Visualization, Templated Dashboards",
        },
      ],
      achievements: [
        "An active part of Agile ceremonies, Acceptance Validation Tests (AVTs), spikes, and Proof of Concepts (POCs)",
        "Provided support, mentorship, and onboarding for junior members and new hires",
        "Fostered the team's growth and collaboration",
        "Delivered fully typed and tested code",
      ],
    },
    {
      id: "echo-2019",
      title: "FRONTEND DEVELOPER",
      company: "Peaksoft - Echo Global Logistics project",
      logo: PeaksoftLogo,
      location: "Chicago, IL",
      employmentType: "Contract",
      startDate: "2019-04",
      endDate: "2021-05",
      technologies: ["REST", "React", "JavaScript", "Redux", "SCSS", "HTML"],
      achievements: [
        "Developed and implemented highly-responsive components using React, Redux, SASS/CSS, HTML in an agile environment",
        "Designed, built and maintained websites, content creation tools, management tools, and digital media",
        "Evaluated code to ensure that it is valid, is properly structured, meets industry standards, and is compatible with browsers, devices, or operating systems",
        "Managed application state with Redux",
        "Collaborated with a UI/UX Designer and used ReactJS, React Bootstrap, and Material UI for the frontend user experience",
        "Refactored class-based components to functional components using Hooks",
      ],
    },
    {
      id: "carlease-2017",
      title: "FRONTEND DEVELOPER",
      company: "Peaksoft - CarLease project",
      logo: PeaksoftLogo,
      location: "Chicago, IL",
      employmentType: "Contract",
      startDate: "2017-05",
      endDate: "2019-03",
      technologies: ["JavaScript", "HTML", "CSS"],
      achievements: [
        "Developed user-oriented visuals and features using front-end languages, including HTML, CSS, and JavaScript to increase site traffic",
        "Developed reusable React components",
        "Collaborated with the design team to implement new UI features",
        "Contributed to an expanding project implementing mobile-first design approach with Sass-based theming system",
        "Designed and implemented HTML email templates and newsletters for marketing campaigns",
      ],
    },
  ],
  education: [
    {
      institution: "General Assembly",
      degree: "Front-End Web Development Course",
      location: "Chicago",
      startYear: 2015,
      endYear: 2015,
    },
    {
      institution: "Kyrgyz State Technical University",
      degree: "Computer Science",
      location: "Bishkek",
      startYear: 2009,
      endYear: 2013,
      status: "dropped out",
    },
  ],
}

export default resumeData
