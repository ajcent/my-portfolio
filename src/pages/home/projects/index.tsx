import { Github, ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const projects = [
  {
    title: "Coffee Leaf Disease Detector",
    description:
      "A mobile app and API that uses a YOLO V10 model to detect diseases in coffee leaves.",
    tech: ["React Native", "Nativewind CSS", "FastAPI", "Docker", "AWS"],
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    title: "BuckTrack – Financial Tracking SaaS",
    description:
      "A progressive web app for tracking personal finances with real-time charts and Supabase integration.",
    tech: ["Next.js", "ShadCN", "Supabase"],
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    title: "Parking System IoT",
    description:
      "A smart parking tracker that monitors real-time slot availability and communicates between hardware and web systems, deployed across cloud platforms.",
    tech: ["React", "Express", "Arduino", "Railway", "Vercel"],
    github: "https://github.com/ajcent/iot-frontend",
    live: "https://iot-frontend-kohl.vercel.app/",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    title: "Gender and Society Landing Page",
    description:
      "A landing page created to promote awareness on gender and society topics, featuring an intuitive design that engages users and clearly presents important information.",
    tech: ["React", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/ajcent/gender-and-society-v2/tree/main",
    live: "https://gensoc-alpha.vercel.app/",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    title: "Pathfinding Visualizer",
    description:
      "An interactive React app that visualizes algorithms like A*, Dijkstra’s, and BFS with animated grid-based paths.",
    tech: ["React", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/ajcent/pathfinding-visualizer",
    live: "https://ajcent.github.io/pathfinding-visualizer/",
    image: "/placeholder.svg?height=200&width=300",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground">
            A selection of my recent work
          </p>
        </div>

        <div className="max-w-6xl mx-auto space-y-16">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`group relative flex flex-col ${
                index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              } lg:items-center gap-8 lg:gap-12`}
            >
              <div className="lg:w-1/2 relative">
                <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900">
                  <div className="aspect-[16/10] overflow-hidden">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      width={500}
                      height={312}
                      className="h-full w-full object-cover transition-all duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>

              <div className="lg:w-1/2 space-y-4">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-3xl font-bold text-gray-200 dark:text-gray-800">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div className="h-px bg-gradient-to-r from-primary to-transparent flex-1" />
                </div>

                <div>
                  <h3 className="text-xl lg:text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {project.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 text-xs bg-gray-100 dark:bg-gray-800 rounded-md font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {project.github === undefined || project.live === undefined ? (
                  <div>
                    <p className="text-sm text-destructive">
                      Details hidden due to NDA.
                    </p>
                  </div>
                ) : (
                  <div className="flex gap-3">
                    <Link
                      href={project.github}
                      className="group/btn flex items-center gap-2 px-4 py-2 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-lg text-sm font-medium hover:bg-gray-800 dark:hover:bg-gray-100 transition-all duration-200 hover:scale-105"
                    >
                      <Github className="h-4 w-4" />
                      <span>Code</span>
                    </Link>
                    <Link
                      href={project.live}
                      className="group/btn flex items-center gap-2 px-4 py-2 border border-gray-900 dark:border-white text-gray-900 dark:text-white rounded-lg text-sm font-medium hover:bg-gray-900 hover:text-white dark:hover:bg-white dark:hover:text-gray-900 transition-all duration-200 hover:scale-105"
                    >
                      <span>Demo</span>
                      <ExternalLink className="h-3 w-3" />
                    </Link>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
