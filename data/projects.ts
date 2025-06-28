export interface Project {
  title: string
  description: string
  tech: string[]
  link: string
  image: string
}

export const projects: Project[] = [
  {
    title: "My Portfolio",
    description:
      "My personal portfolio showcasing my skills, projects, and experience. Built with Next.js and TypeScript to showcase my work and connect to people.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Shadcn UI"],
    link: "#",
    image: "/images/Portfolio.png",
  },
  {
    title: "INVENTUM",
    description:
      "A comprehensive Medical Inventory Management System developed for RS UMMI hospital as part of the Software Project course. Features include spare parts management, medical equipment tracking, user administration, history logging, and comprehensive reporting. Implemented using Agile methodology with a focus on quality assurance through monitoring, SonarQube, load testing, and CI/CD pipeline with Portainer Docker containerization.",
    tech: ["Next.js", "Express.js", "MySQL", "TypeScript", "Shadcn UI", "Cucumber", "Docker", "Sentry", "SonarQube", "Jest", "k6"],
    link: "https://ppl-c5.rsummi.co.id/",
    image: "/images/INVENTUM.png",
  },
  {
    title: "Klitama",
    description:
      "A secure healthcare clinic application developed as part of the Security Driven Software Development course. Features include service appointment scheduling, health article library, and comprehensive admin user management. Built with a strong focus on security principles and underwent rigorous penetration testing to ensure data protection and system integrity.",
    tech: ["Python", "Django", "Tailwind CSS", "PostgreSQL", "OWASP ZAP", "Burp Suite"],
    link: "https://kelompok-54-klitama.pkpl.cs.ui.ac.id/",
    image: "/images/klitama.png",
  },
  {
    title: "HeyMart",
    description:
      "An e-commerce platform developed as part of the Advanced Programming course, featuring a full-stack microservices architecture with Test Driven Development practices. Implemented robust user management, product catalog, and automated delivery scheduling systems with a comprehensive CI/CD pipeline. Integrated Grafana and Prometheus for advanced performance monitoring and system health visualization.",
    tech: ["Next.js", "JavaScript", "Spring Boot", "Java", "PostgreSQL", "Grafana", "Prometheus"],
    link: "https://github.com/AdvPro-B13",
    image: "/images/HeyMart.png",
  },
  {
    title: "Litracker",
    description:
      "A literature tracking application developed for the Platform Based Programming course with both web and mobile interfaces. Allows users to track their reading habits, favorite books, write and read reviews, maintain reading history, and upvote popular titles. The web version was built with Django and Bootstrap, while the mobile companion app was developed using Flutter for cross-platform compatibility.",
    tech: ["Python", "Django", "Bootstrap", "HTML", "Flutter", "Dart"],
    link: "https://github.com/PBP23-A01",
    image: "/images/Litracker.png",
  },
]