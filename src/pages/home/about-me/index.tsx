import { Code, Lightbulb, Users, TrendingUp } from "lucide-react";
import React from "react";

const aboutHighlights = [
  {
    icon: Code,
    title: "Frontend Work",
    description:
      "Comfortable building responsive interfaces with React, Next.js, TypeScript, and Tailwind CSS.",
  },
  {
    icon: Lightbulb,
    title: "Industry Experience",
    description:
      "Worked with a small dev team at Codebility on a finance app using modern tools like Supabase and Storybook.",
  },
  {
    icon: Users,
    title: "Tech Support Background",
    description:
      "Worked with a small dev team at Codebility on a finance app using modern tools like Supabase and Storybook.",
  },
  {
    icon: TrendingUp,
    title: "Backend Skills",
    description:
      "Familiar with building APIs using Node.js and FastAPI, and deploying projects with Docker, Vercel, and AWS.",
  },
];

const AboutMe = () => {
  return (
    <section id="about" className="py-16 sm:py-24 bg-grid-pattern">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
              About Me
            </h2>
            <p className="text-lg text-muted-foreground">
              A brief overview of my journey and what drives me.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 border border-gray-200 dark:border-gray-700">
            <p className="text-lg leading-relaxed text-muted-foreground mb-8 text-center">
              I’m a Computer Science graduate from Cavite State University who
              enjoys building fullstack projects that solve real problems.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {aboutHighlights.map((item, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="flex-shrink-0 p-3 rounded-full bg-primary/10 text-primary">
                    <item.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-1">{item.title}</h3>
                    <p className="text-muted-foreground text-sm">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
