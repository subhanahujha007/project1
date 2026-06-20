import Image from "next/image";
import React from "react";

const resume = {
  name: "Subhanshu Jha",
  role: "Frontend Engineer — JavaScript — React.js — Next.js — TypeScript",
  location: "Noida, Uttar Pradesh, India",
  email: "subhanshujha001@gmail.com",
  phone: "+91-9599719631",
  summary:
    "Frontend engineer focused on building performant, accessible, and maintainable web applications. Strong experience with React, Next.js, TypeScript, and optimizing Core Web Vitals.",
  experience: [
    {
      company: "LP Fintech",
      role: "Software Engineer — Full Stack (Frontend Ownership)",
      period: "Jul 2025 — Present",
      bullets: [
        "Architected and developed a multi-tenant SPA with reusable component libraries, dynamic theming, and permission-based rendering enabling isolated branding and data contexts for multiple enterprise clients.",
        "Improved Largest Contentful Paint (LCP) by 40% via code splitting, lazy loading, React Hooks optimizations (useMemo, useCallback), asset compression, and API payload reduction.",
        "Implemented secure authentication and authorization using JWT, RBAC, automatic token refresh, and frontend session management.",
        "Collaborated on API contract design with backend teams, reducing production API mismatch issues by over 60%.",
        "Introduced automated linting, formatting, and Jest unit tests for critical UI components, improving code quality and reducing regressions.",
      ],
    },
    {
      company: "Adhipa Technologies",
      role: "Software Developer Intern",
      period: "Aug 2024 — Nov 2024",
      bullets: [
        "Built and maintained a 30-page React admin dashboard with GraphQL subscriptions, reusable UI components, role-based access control, and complex state workflows.",
        "Reduced unnecessary re-renders by 45% through component memoization and optimized data-fetching strategies.",
      ],
    },
  ],
  projects: [
    {
      name: "ChatSOP",
      description:
        "Production AI SaaS platform with RAG pipeline, real-time chat, and embeddable widgets.",
      tech: "React.js, Next.js, TypeScript, Node.js, WebSockets, RAG",
      url: "https://www.chatsop.in/home",
    },
    {
      name: "Algorithm Visualizer",
      description: "Interactive algorithm visualization demo deployed on Vercel.",
      tech: "React.js, Next.js",
      url: "https://algoritm-visualizer-n6ue.vercel.app/",
    },
  ],
  education: [
    {
      school: "Guru Tegh Bahadur Institute of Technology",
      degree: "Bachelor of Technology (B.Tech), Information Technology",
      period: "2021 — 2025",
      extra: "CGPA: 7.97",
    },
  ],
  skills: [
    "JavaScript (ES6+)",
    "TypeScript",
    "React.js",
    "Next.js",
    "Redux Toolkit",
    "Tailwind CSS",
    "Material UI",
    "Accessibility (WCAG)",
    "Performance Optimization",
  ],
  ai: ["RAG", "Prompt Engineering", "Semantic Embeddings", "Vector Search"],
  tools: ["Git", "GitHub", "Docker", "Turborepo", "CI/CD", "Jest"],
  achievements: [
    "Smart India Hackathon (SIH) — Rank 1 at College Level",
    "LeetCode — 340+ Problems Solved — Rating: 1800+",
  ],
  personal: {
    hobbies: ["Reading", "Open source", "Traveling"],
  },
};

function SectionTitle({ children }: { children: React.ReactNode }) {
  return <h3 className="text-xl font-semibold text-gray-100 mb-3">{children}</h3>;
}

function TimelineItem({ item }: { item: any }) {
  return (
    <div className="mb-6">
      <div className="flex items-center gap-4">
        <div className="w-3 h-3 rounded-full bg-purple-400" />
        <div>
          <div className="text-sm font-medium text-gray-200">{item.role}</div>
          <div className="text-xs text-gray-400">{item.company} • {item.period}</div>
        </div>
      </div>
      <ul className="list-disc ml-8 mt-2 text-gray-300 text-sm">
        {item.bullets?.map((b: string, i: number) => (
          <li key={i}>{b}</li>
        ))}
      </ul>
    </div>
  );
}

export default function Page() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#07021a] to-[#030014] text-gray-200 py-24 px-6 md:px-16">
      <div className="max-w-6xl mx-auto bg-[#0b0716]/50 backdrop-blur-sm rounded-2xl shadow-lg p-8 md:p-12">
        <div className="flex flex-col md:flex-row gap-8">
          <aside className="w-full md:w-1/3 flex-shrink-0">
            <div className="flex flex-col items-center text-center">
              <div className="w-36 h-36 rounded-full overflow-hidden ring-2 ring-[#7c3aed] mb-4">
               <div className="w-36 h-36 overflow-hidden rounded-full">
  <Image
    src="/Subhanshujha.jpg"
    alt="avatar"
    width={144}
    height={144}
    className="w-full h-full object-cover"
  />
</div>
              </div>
              <h1 className="text-2xl font-bold">{resume.name}</h1>
              <p className="text-sm text-gray-300 mt-1">{resume.role}</p>
              <p className="text-xs text-gray-400 mt-2">{resume.location}</p>
            </div>

            <div className="mt-8 bg-[#07061a] p-4 rounded-lg">
              <SectionTitle>Contact</SectionTitle>
              <div className="text-sm text-gray-300">
                <div>{resume.email}</div>
                <div className="mt-1">{resume.phone}</div>
              </div>

            

              <div className="mt-6">
                <SectionTitle>Skills</SectionTitle>
                <div className="flex flex-wrap gap-2">
                  {resume.skills.map((s) => (
                    <span key={s} className="px-3 py-1 text-xs bg-[#1b1630] rounded-full text-gray-200">
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-6">
                <SectionTitle>Personal</SectionTitle>
                <div className="text-sm text-gray-300">Hobbies: {resume.personal.hobbies.join(', ')}</div>
              </div>
            </div>
          </aside>

          <section className="w-full md:w-2/3">
            <div className="mb-6">
              <SectionTitle>Career Summary</SectionTitle>
              <p className="text-sm text-gray-300">{resume.summary}</p>
            </div>

            <div className="mb-6">
              <SectionTitle>Experience</SectionTitle>
              <div className="border-l border-[#3b2a63] pl-6">
                {resume.experience.map((exp, i) => (
                  <TimelineItem key={i} item={exp} />
                ))}
              </div>
            </div>

              <div className="mb-6">
                <SectionTitle>Projects</SectionTitle>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {resume.projects.map((p, i) => (
                    <a
                      key={i}
                      href={p.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block p-4 rounded-lg bg-[#071026] hover:bg-[#0b1530] transition"
                    >
                      <div className="font-medium text-gray-100">{p.name}</div>
                      <div className="text-xs text-gray-400 mt-1">{p.tech}</div>
                      <p className="text-sm text-gray-300 mt-2">{p.description}</p>
                    </a>
                  ))}
                </div>
              </div>

              <div>
                <SectionTitle>Education</SectionTitle>
                <div className="text-sm text-gray-300">
                  {resume.education.map((ed, i) => (
                    <div key={i} className="mb-4">
                      <div className="font-medium text-gray-100">{ed.degree}</div>
                      <div className="text-xs text-gray-400">{ed.school} • {ed.period} • {ed.extra}</div>
                    </div>
                  ))}
                </div>
              </div>
          </section>
        </div>
      </div>
    </main>
  );
}
