"use client"

import { motion } from "framer-motion"
import { ExternalLink, Github } from "lucide-react"
import Link from "next/link"

const projects = [
    {
        title: "Brain Wave ",
        description: "A modern frontend React application dedicated to UI design practice, featuring smooth animations and a futuristic interface.",
        tags: ["React.js", "Tailwind CSS", "Framer Motion"],
        link: "https://brain-wave-phi-three.vercel.app/",
        color: "from-purple-500 to-indigo-500",
    },
    {
        title: "Chat Bot",
        description: "An intelligent chatbot application integrating Gemini AI, providing responsive and context-aware interactions.",
        tags: ["JavaScript", "Gemini AI", "CSS3"],
        link: "https://kmcodexion.vercel.app/",
        color: "from-blue-500 to-cyan-500",
    },
    {
        title: "Immigration Agency",
        description: "A professional client project built with React.js for an immigration consultancy, featuring service listings and contact forms.",
        tags: ["React.js", "Client Project", "Responsive Design"],
        link: "https://immigrationagency.vercel.app/",
        color: "from-emerald-500 to-teal-500",
    },
]

export function Projects() {
    return (
        <section id="projects" className="py-20 bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                        Featured Projects
                    </h2>
                    <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full mb-8"></div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group relative bg-card rounded-2xl overflow-hidden border border-border hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300 flex flex-col"
                        >
                            {/* Project Header / Thumbnail Placeholder */}
                            <div className={`h-48 bg-gradient-to-br ${project.color} p-6 flex items-center justify-center`}>
                                <h3 className="text-2xl font-bold text-white text-center drop-shadow-md">
                                    {project.title}
                                </h3>
                            </div>

                            <div className="p-6 flex-1 flex flex-col justify-between">
                                <div>
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {project.tags.map((tag) => (
                                            <span key={tag} className="text-xs font-semibold px-2 py-1 bg-secondary text-secondary-foreground rounded-full">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                    <p className="text-muted-foreground mb-6 line-clamp-3">
                                        {project.description}
                                    </p>
                                </div>

                                <div className="flex items-center gap-4 mt-auto">
                                    <Link
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center text-sm font-medium text-primary hover:underline"
                                    >
                                        Live Demo <ExternalLink className="ml-1 h-3 w-3" />
                                    </Link>
                                    {/* Assuming GitHub links might optionally exist or generally linking to profile if specific repo not provided */}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
