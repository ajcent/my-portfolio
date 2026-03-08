"use client";

import { ArrowDown } from "lucide-react";

export function Hero() {
  return (
    <section className="py-24 md:py-40 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-muted/30 blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-muted/20 blur-3xl -z-10" />

      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-3xl">
          <div className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-green-500">
            <div className="w-2 h-2 rounded-full bg-green-500" />
            Open to opportunities
          </div>
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-foreground mb-8 leading-tight text-balance">
            Building the bridge between data and design
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mb-12">
            I’m a full-stack developer who specializes in connecting real-time systems with modern user interfaces. I
            focus on creating clean, functional applications where stable backend engineering meets thoughtful frontend
            experiences.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <a
              href="#work"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-lg hover:bg-accent hover:text-accent-foreground transition-all duration-300 font-semibold hover:shadow-xl"
            >
              View My Work
              <ArrowDown size={18} className="rotate-90" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent border-2 border-foreground text-foreground rounded-lg hover:bg-foreground hover:text-background transition-all duration-300 font-semibold"
            >
              Get In Touch
            </a>
          </div>

          <div className="flex items-center gap-8 text-sm">
            <div>
              <p className="text-muted-foreground mb-1">Currently</p>
              <p className="font-semibold text-foreground">Available for work</p>
            </div>
            <div className="w-px h-12 bg-border" />
            <div>
              <p className="text-muted-foreground mb-1">Based in</p>
              <p className="font-semibold text-foreground">Dasmariñas, Cavite</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
