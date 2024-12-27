import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import projectImg from "@/public/project_placeholder.webp";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  // {
  //   name: "Projects",
  //   hash: "#projects",
  // },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "HR Analytics Intern",
    location: "TUV SUD PSB",
    description:
      `  
Best Internship Award Winner (2023): Honored for improving reporting processes.
• Created detailed annual HR reports for management, supporting strategic decisions with data-driven insights.
• Developed a dynamic Excel dashboard for real-time data exploration, enhancing user experience and analysis efficiency.
• Collaborated across regions and departments to define data requirements, ensuring accurate and insightful data representation in reports and dashboards.
      `,
    icon: React.createElement(CgWorkAlt),
    date: "Nov 2022 - May 2023",
  },
  {
    title: "Machine Learning Engineer Intern",
    location: "TUV SUD PSB",
    description:
      `
• Trained advanced classification algorithms, enhancing
accuracy and recall, leading to significant improvements
in model performance.
• Utilized Docker containerization for seamless
deployment of models.
`,
    icon: React.createElement(CgWorkAlt),
    date: "Jun 2023 - Jul 2023",
  },
  {
    title: "AI Software Engineering Intern",
    location: "Cynapse",
    description:
      `
• Automated synthetic dataset generation by developing a 
data pipeline leveraging stable diffusion and LLAMAs for 
creating multimodal person attribute datasets.
• Utilized AWS SageMaker to streamline training for a 
sophisticated multimodal Generative AI model tailored for 
person search within CCTV surveillance databases, 
implemented using Python.
• Enhanced dataset adaptability by augmenting data 
structure, ensuring superior generalization across diverse 
use cases.
• Implemented prompt engineering techniques to optimize 
descriptive text generation for model training, resulting in 
significant model improvement.`,
    icon: React.createElement(CgWorkAlt),
    date: "Oct 2023 – Mar 2024 ",
  },
  {
    title: "HR Analytics Intern",
    location: "TUV SUD PSB",
    description:
      `
• Created detailed annual HR reports for management, 
supporting strategic decisions with data-driven insights. 
`,
    icon: React.createElement(CgWorkAlt),
    date: "Apr 2024 – May 2024",
  },
  {
    title: "Data Engineer",
    location: "Luxoft",
    description:
      ` 
• Developed and managed ETL/ELT processes to ensure 
accurate and timely data flow. Implemented automation 
scripts to enhance the efficiency and scalability of data 
ingestion.
• Created user-friendly Tableau dashboards that present 
complex data in clear and actionable formats. This 
significantly improved user experience and interactivity 
while reducing latency.
• Enhanced the efficiency of data pipelines and the 
responsiveness of dashboards, resulting in a better user 
experience.
• Maintained high standards of data accuracy and reliability 
through rigorous validation practices.`,
    icon: React.createElement(CgWorkAlt),
    date: "Jun 2024 – Present",
  },
] as const;

export const projectsData = [
  {
    title: "CorpComment",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: projectImg,
  },
  {
    title: "rmtDev",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: projectImg,
  },
  {
    title: "Word Analytics",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: projectImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "MongoDB",
  "PostgreSQL",
  "Python",
  "Django",
  "Framer Motion",
  "Snowflake",
  "Golang",
] as const;