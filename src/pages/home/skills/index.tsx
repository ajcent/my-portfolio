import React from "react";

import { Badge } from "@/components/ui/badge";

const skills = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "Python",
  "MySQL",
  "PostgreSQL",
  "Tailwind CSS",
  "AWS",
  "Docker",
  "Git",
];

const Skills = () => {
  return (
    <section id="skills" className="py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Skills & Technologies
          </h2>
          <p className="text-lg text-muted-foreground">
            Technologies I work with to bring ideas to life
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
          {skills.map((skill) => (
            <Badge
              key={skill}
              variant="secondary"
              className="text-sm py-2 px-4"
            >
              {skill}
            </Badge>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
