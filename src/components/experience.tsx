"use client";

import { experiences } from "@/constants/home.constants";
import { Badge } from "@/components/ui/badge";
import { ChevronRight } from "lucide-react";
import { useState } from "react";

export function Experience() {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  return (
    <section id="experience" className="py-20 md:py-28 border-t border-border">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-start mb-16">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8">Experience</h2>
            <div className="flex gap-2">
              <div className="w-12 h-1.5 bg-primary" />
              <div className="w-8 h-1.5 bg-accent opacity-50" />
            </div>
          </div>
          <div>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              Professional experience developing full-stack applications, connecting real-time data services with modern
              user interfaces.
            </p>
          </div>
        </div>

        <div className="space-y-6">
          {experiences.map((exp) => (
            <button
              key={exp.id}
              onClick={() => setExpandedId(expandedId === exp.id ? null : exp.id)}
              className="group w-full text-left"
            >
              {/* Main Card */}
              <div className="bg-card border border-border rounded-lg p-6 md:p-8 hover:border-primary hover:shadow-lg transition-all duration-300">
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${exp.color}`} />
                      <h3 className="text-xl md:text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                        {exp.position}
                      </h3>
                    </div>
                    <p className="text-base font-semibold text-muted-foreground mb-2">{exp.company}</p>
                    <div className="flex items-center gap-3 flex-wrap">
                      <Badge variant="outline" className="text-xs">
                        {exp.duration}
                      </Badge>
                      <Badge variant="secondary" className="text-xs bg-muted/60">
                        {exp.type}
                      </Badge>
                    </div>
                  </div>
                  <ChevronRight
                    size={24}
                    className={`text-primary flex-shrink-0 transition-transform duration-300 ${
                      expandedId === exp.id ? "rotate-90" : ""
                    }`}
                  />
                </div>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">{exp.description}</p>
              </div>

              {/* Expanded Details */}
              {expandedId === exp.id && (
                <div className="bg-muted/30 border border-border border-t-0 rounded-b-lg p-6 md:p-8 space-y-6 animate-in fade-in duration-200">
                  <div>
                    <h4 className="text-sm font-bold text-foreground uppercase tracking-wider mb-4">Key Highlights</h4>
                    <ul className="space-y-3">
                      {exp.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex gap-3 text-sm md:text-base">
                          <span className="text-primary font-bold flex-shrink-0 mt-1">•</span>
                          <span className="text-muted-foreground leading-relaxed">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-sm font-bold text-foreground uppercase tracking-wider mb-4">Key Skills</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
