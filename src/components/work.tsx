"use client";

import { projects } from "@/constants/home.constants";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";
import { useState } from "react";

export function Work() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section id="work" className="py-20 md:py-28 border-t border-border">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-start mb-16">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8">Work</h2>
            <div className="flex gap-2">
              <div className="w-12 h-1.5 bg-primary" />
              <div className="w-8 h-1.5 bg-accent opacity-50" />
            </div>
          </div>
          <div>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              A collection of projects highlighting my work in design and development. Please note that some
              professional projects are omitted due to confidentiality agreements.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {projects.map((project) => (
            <button
              key={project.id}
              className="group text-left cursor-pointer"
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div
                className={`h-72 rounded-lg mb-6 bg-gradient-to-br ${project.bgColor} transition-all duration-500 ${hoveredId === project.id ? "scale-105 shadow-xl" : "shadow-md"} relative overflow-hidden flex items-center justify-center`}
              >
                <div
                  className={`absolute inset-0 bg-black transition-opacity duration-500 ${hoveredId === project.id ? "opacity-5" : "opacity-0"}`}
                />
                <div className="text-5xl md:text-6xl font-bold text-foreground/20 relative z-10">
                  {project.initials}
                </div>
              </div>
              <div className="flex items-center gap-2 mb-3">
                <h3 className="text-xl md:text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>
              </div>
              <p className="text-sm md:text-base text-muted-foreground mb-6 leading-relaxed h-12 overflow-hidden">
                {project.description}
              </p>
              <div className="flex items-center justify-between gap-4">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="outline"
                      className="text-xs cursor-pointer hover:border-primary hover:bg-muted transition-all"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
