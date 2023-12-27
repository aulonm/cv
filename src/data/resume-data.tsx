import ConsultlyLogo from "../images/logos/consultly.svg";
import ParabolLogo from "../images/logos/parabol.svg";
import { GitHubIcon } from "../components/icons/GitHubIcon";
import { LinkedInIcon } from "../components/icons/LinkedInIcon";
import { XIcon } from "../components/icons/XIcon";

export const RESUME_DATA = {
  name: "Aulon Mujaj",
  initials: "AM",
  location: "Oslo, Norway, CET",
  locationLink: "https://www.google.com/maps/place/Oslo",
  about: "Description and information",
  summary: "Description and information",
  avatarUrl: "https://avatars.githubusercontent.com/u/4094284?v=4",
  personalWebsiteUrl: "https://mujaj.dev",
  contact: {
    email: "dsds@gmail.com",
    tel: "+47 123 45 678",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/aulonm",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/aulon-mujaj-585a3457/",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://x.com/aulonmujaj",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "University of Oslo",
      degree: "Description and information",
      start: "2012",
      end: "2017",
    },
  ],
  work: [
    {
      company: "Knowit",
      link: "https://knowit.no",
      badges: [],
      title: "Consultant",
      logo: ParabolLogo,
      start: "2016",
      end: "2022",
      description: "Description and information",
    },
  ],
  skills: [
    "JavaScript",
    "TypeScript",
    "React/Next.js",
    "Node.js",
    "GraphQL",
    "Relay",
    "WebRTC",
    "Vue.JS",
  ],
  projects: [
    {
      title: "Google",
      techStack: [
        "Side Project",
        "TypeScript",
        "Next.js",
        "Vite",
        "GraphQL",
        "WebRTC",
      ],
      description: "A platform",
      logo: ConsultlyLogo,
      link: {
        label: "google",
        href: "https://google.com/",
      },
    },
  ],
} as const;
