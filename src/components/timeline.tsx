"use client"

import { motion } from "framer-motion"
import { useMobile } from "@/hooks/use-mobile"

const experiences = [
  {
    title: "Associate Software Engineer",
    company: "ProcUrPal",
    period: "May 2025 - Aug 2025",
    description: `
• Delivered a fully functional platform end-to-end, implementing 7+ dynamic pages with dashboards and reusable UI components, handling both API and UI integration independently.
• Developed CRUD APIs for 12+ modules and integrated 10+ user and department management APIs, connecting relational data using PostgreSQL and Prisma.
• Built JWT-based authentication system with protected routes, role-based access, and secure login flows across frontend and backend using Next.js and NestJS.
• Tech Stack: Next.js, NestJS, PostgreSQL, Prisma, JWT, TailwindCSS
    `.trim(),
  },
  {
    title: "Full Stack Developer Intern",
    company: "RecurX",
    period: "March 2025 - May 2025",
    description: `
• Built 8+ responsive and dynamic pages including authentication, blog, and career sections using React.js and TailwindCSS with infinite scroll and conditional rendering for seamless UX.
• Developed 20+ robust backend REST APIs using Node.js, Express, and MongoDB, enabling secure user authentication with JWT, protected routes, blog creation and retrieval with pagination, and career application.
• Tech Stack: React.js, Node.js, Express, MongoDB, JWT, TailwindCSS, JavaScript
    `.trim(),
  },
]

export function Timeline() {
  const isMobile = useMobile()

  return (
    <div
      className={`space-y-12 relative ${
        !isMobile
          ? "before:absolute before:inset-0 before:left-1/2 before:ml-0 before:-translate-x-px before:border-l-2 before:border-zinc-700 before:h-full before:z-0"
          : ""
      }`}
    >
      {experiences.map((experience, index) => (
        <div
          key={index}
          className={`relative z-10 flex items-center ${index % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"}`}
        >
          <motion.div
            className={`w-full md:w-1/2 ${index % 2 === 0 ? "md:pl-10" : "md:pr-10"}`}
            initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="relative overflow-hidden rounded-xl bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/50 p-6 transition-all duration-300 hover:border-purple-500/50">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-xl blur opacity-25 hover:opacity-100 transition duration-1000 hover:duration-200"></div>

              <div className="relative">
                <h3 className="text-xl font-bold">{experience.title}</h3>
                <div className="text-zinc-400 mb-4">
                  {experience.company} | {experience.period}
                </div>
                <ul className="text-zinc-300 list-disc pl-5 space-y-2">
                  {experience.description.split("\n").map((point, idx) => (
                    <p key={idx}>{point.trim()}</p>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>

          {!isMobile && (
            <div className="absolute left-1/2 -translate-x-1/2 flex items-center justify-center">
              <motion.div
                className="w-6 h-6 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 z-10 flex items-center justify-center"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.3 }}
                viewport={{ once: true }}
              >
                <div className="w-2 h-2 rounded-full bg-white"></div>
              </motion.div>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
