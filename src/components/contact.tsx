import { socials } from "@/constants/home.constants";
import { ArrowRight, Mail } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32 border-t border-border">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-start mb-20">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8">Let's Connect</h2>
            <div className="flex gap-2">
              <div className="w-12 h-1.5 bg-primary" />
              <div className="w-8 h-1.5 bg-accent opacity-50" />
            </div>
          </div>
          <div>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm always interested in new challenges, collaborations, and conversations about design and technology.
              Reach out if you'd like to talk.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-card border-2 border-primary rounded-xl p-8 hover:shadow-xl transition-shadow">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                <Mail size={24} className="text-primary-foreground" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Drop me a line</p>
                <p className="text-lg font-semibold text-foreground">Email</p>
              </div>
            </div>
            <a
              href="mailto:hello@example.com"
              className="inline-flex items-center gap-2 text-primary font-semibold hover:text-accent transition-colors"
            >
              johnloyd.centeno@gmail.com
              <ArrowRight size={18} />
            </a>
          </div>

          <div className="bg-card border border-border rounded-xl p-8 hover:border-foreground hover:shadow-xl transition-all">
            <p className="text-sm text-muted-foreground mb-6">Follow my work</p>
            <div className="space-y-3">
              {socials.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors p-3 rounded-lg hover:bg-muted"
                  >
                    <Icon size={20} />
                    <span className="font-medium">{social.name}</span>
                    <ArrowRight
                      size={16}
                      className="ml-auto opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all"
                    />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
