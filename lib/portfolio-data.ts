export const profile = {
  name: "Sergio Garcia Cristobal",
  role: "Cybersecurity Engineer",
  tagline: "Computer Engineering student at UC3M.",
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
  "I'm a tech enthusiast driven by a passion for solving problems through code. I am currently pursuing my Bachelor’s Degree in Software Engineering, a step I am eager to take to build a solid theoretical foundation.",
  "For some time now, I have been learning to program autonomously, exploring web/app development, cybersecurity, game development and robotics. I consider myself a curious, adaptable fast-learner who loves turning ideas into functional software. I am fully prepared to balance my university studies with building impactful, real-world projects."
]

export const experience = [
  {
    // period: "2026 - Present",
    // role: "Security Analyst Intern",
    // company: "Telefónica Tech",
    // companyUrl: "#",
    // description:
    //   "Support the SOC team in triaging alerts, investigating phishing campaigns, and tuning detection rules. Automated repetitive enrichment tasks with Python, cutting manual triage time on common alert classes.",
    // tags: ["SIEM", "Python", "Threat Intel", "Incident Response"],
  }
]

export const projects = [
  {
    title: "Certifications",
    description:
      "A collection of my certifications in a wide range of areas, including AI, cybersecurity, and software development.",
    tags: ["AI Fluency", "FastAPI", "scikit-learn", "Docker"],
    link: "#",
    repo: "#",
  },
]

export const skillGroups = [
  {
    category: "Security",
    items: ["Penetration Testing", "Threat Modeling", "Burp Suite", "Metasploit", "Nmap", "Wireshark", "OWASP Top 10"],
  },
  {
    category: "Languages",
    items: ["Python", "C#", "JavaScript", "TypeScript", "HTML", "CSS"],
  },
  {
    category: "Tools & Platforms",
    items: ["Git", "GitHub", "Visual Studio"],
  },
  {
    category: "Soft Skills",
    items: ["Problem Solving", "Teamwork", "Adaptability", "Communication", "Project Management"],
  },
]

export const education = [
  {
    period: "2026 — 2030 (expected)",
    degree: "B.Sc. in Computer Engineering",
    school: "Universidad Carlos III de Madrid (UC3M)",
    detail:
      "Specify the details of the education here",
    tags: ["Computer Engineering", "Cybersecurity", "AI"],
  },
  {
    period: "2024 - 2026",
    degree: "High School Diploma",
    school: "Mirasur Bilingual School",
    detail:
      "Honorific mention in technical drawing. Completed the period with a GPA of 9.5/10. ",
    tags: ["High School"],
  },
]
