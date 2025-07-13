import Image from "next/image";
import Link from "next/link";
import React from "react";

import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="py-20 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="mx-auto mb-8 h-32 w-32 overflow-hidden rounded-full">
            <Image
              src="/images/my-picture.jpg"
              alt="John Lloyd Centeno"
              width={128}
              height={128}
              className="h-full w-full object-cover"
            />
          </div>
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
            Hi, I&apos;m John Lloyd Centeno
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground max-w-2xl mx-auto">
            I build full-stack web applications with clean interfaces and
            reliable functionality, using tools that fit the project best.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button asChild>
              <Link href="#projects">View My Work</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="#contact">Get In Touch</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
