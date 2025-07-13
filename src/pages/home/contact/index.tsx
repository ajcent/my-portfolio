import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

const Contact = () => {
  return (
    <section id="contact" className="py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Get In Touch
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I&apos;m always open to discussing new opportunities, interesting
            projects, or just having a chat about technology.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
          <Button size="lg" asChild>
            <Link
              href="https://mail.google.com/mail/?view=cm&fs=1&to=johnloyd.centeno@gmail.com"
              target="_blank"
            >
              <Mail className="h-5 w-5 mr-2" />
              Gmail Me
            </Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="https://ph.linkedin.com/in/jl-centeno" target="_blank">
              <Linkedin className="h-5 w-5 mr-2" />
              LinkedIn
            </Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="https://github.com/ajcent" target="_blank">
              <Github className="h-5 w-5 mr-2" />
              GitHub
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
