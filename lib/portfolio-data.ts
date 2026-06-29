export const profile = {
  name: "Sergio Garcia Cristobal",
  role: "Computer Engineering Student & Self-Taught Developer",
  tagline: "Incoming UC3M student building web, mobile, hardware, and cybersecurity projects.",
  location: "Madrid, Spain",
  email: "sergio.garcia.cristobal@gmail.com",
  cvUrl: "/sergiogarciacristobal-cv.pdf",
  socials: {
    github: "https://github.com/sgc11pro",
    linkedin: "https://www.linkedin.com/in/sergio-garc%C3%ADa-crist%C3%B3bal-88652741a/",
  },
}

export const navItems = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
] as const

export const aboutParagraphs = [
  "I'm Sergio Garcia Cristobal, and I am currently pursuing a Computer Engineering degree at UC3M. I am especially interested in the area of cybersecurity, AI and quantum computing.",
  "Over the last few years I have taught myself HTML, CSS, JavaScript, React, React Native, SQL, and the basics of Arduino and cybersecurity through hands-on projects, HackTheBox, and TryHackMe. I like learning by building, refining, and shipping work that feels practical and well finished."
]

export const experience = [
  {
    period: "2022 - Present",
    role: "Self-taught Developer",
    company: "Independent",
    companyUrl: "https://github.com/SGC11PRO",
    description:
      "I have spent the last few years learning by building small web experiences, mobile apps, and technical experiments. My focus has been on React, JavaScript, and turning ideas into clean, functional products.",
    tags: ["HTML", "CSS", "JavaScript", "React"],
  },
  {
    period: "2023 - 2025",
    role: "Cybersecurity Practice",
    company: "Hack The Box & TryHackMe",
    companyUrl: "https://www.hackthebox.com",
    description:
      "I have been exploring the basics of cybersecurity through guided labs and challenge platforms, building a practical understanding of networking, web security, Linux, and problem-solving under pressure.",
    tags: ["Cybersecurity", "Linux", "Networking", "Pentesting"],
  },
]

export const projects = [
  {
    title: "Just Build",
    description:
      "A polished e-commerce concept built to showcase construction-block products with a clear shopping flow, product cards, and a strong brand identity.",
    tags: ["HTML", "CSS", "JavaScript", "E-commerce"],
    link: "https://justbuildoficial.netlify.app",
    repo: "https://github.com/SGC11PRO/Just-Build",
  },
  {
    title: "Optimus Student",
    description:
      "An algorithm-driven planner that organizes study sessions across the week based on the number of hours you want to commit.",
    tags: ["JavaScript", "Productivity", "Planning", "Automation"],
    link: "https://sergiog-optimusstudent.netlify.app",
    repo: "https://github.com/SGC11PRO/Study-Assistant",
  },
  {
    title: "TODO App",
    description:
      "A mobile to-do app with async storage, custom priorities, reminders, and push notifications, designed with a minimal modern interface.",
    tags: ["React Native", "TypeScript", "Async Storage", "Notifications"],
    link: "https://github.com/SGC11PRO/TODO-App",
    repo: "https://github.com/SGC11PRO/TODO-App",
  },
  {
    title: "No Man's Sky Wiki",
    description:
      "A personal exploration wiki for tracking planets discovered in No Man's Sky, with tag-based search, map views, and an organized way to revisit discoveries.",
    tags: ["Next.js", "React", "Search", "Maps"],
    link: "https://nms-wiki.netlify.app",
    repo: "https://github.com/SGC11PRO/No-Mans-Sky-Wiki",
  },
  {
    title: "dnd-app",
    description:
      "An AI-assisted tool designed to help Dungeon Masters understand and present encounter rolls with a more useful, game-ready output.",
    tags: ["AI", "JavaScript", "RPG Tools", "UX"],
    link: "https://aiencounters.netlify.app",
    repo: "https://github.com/SGC11PRO/dnd-app",
  },
]

export const skillGroups = [
  {
    category: "Frontend",
    items: ["HTML", "CSS", "JavaScript", "React", "TypeScript"],
  },
  {
    category: "Mobile",
    items: ["React Native"],
  },
  {
    category: "Hardware & Data",
    items: ["Arduino", "SQL"],
  },
  {
    category: "Security",
    items: ["Hack The Box", "TryHackMe", "Linux", "OWASP Top 10"],
  },
  {
    category: "Tools & Platforms",
    items: ["Git", "GitHub", "VS Code"],
  },
  {
    category: "Soft Skills",
    items: ["Self-learning", "Problem Solving", "Adaptability", "Teamwork"],
  },
]

export const education = [
  {
    period: "2026 — 2030 (expected)",
    degree: "B.Sc. in Computer Engineering",
    school: "Universidad Carlos III de Madrid (UC3M)",
    detail:
      "Starting in September 2026 after years of self-directed learning in programming, systems, and hardware.",
    tags: ["Computer Engineering", "Software Development", "Cybersecurity"],
  },
  {
    period: "2024 - 2026",
    degree: "High School Diploma",
    school: "Mirasur School",
    detail:
      "Completed both years with a combined average of 9.53 out of 10 and earned an honors distinction in technical drawing.",
    tags: ["Honors", "Technical Drawing", "Academic Excellence"],
  },
]
