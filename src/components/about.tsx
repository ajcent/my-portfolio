import { skills } from "@/constants/home.constants";

export function About() {
  return (
    <section id="about" className="py-24 md:py-32 border-t border-border">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-start mb-16">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8">About</h2>
            <div className="flex gap-2">
              <div className="w-12 h-1.5 bg-primary" />
              <div className="w-8 h-1.5 bg-accent opacity-50" />
            </div>
          </div>
          <div className="space-y-8">
            <p className="text-lg text-muted-foreground leading-relaxed">
              My journey into development began in university with a focus on TypeScript and React. Over the past 1.5
              years, I’ve transitioned from a frontend enthusiast into a full-stack engineer, specializing in building
              the bridge between complex data systems and intuitive user interfaces.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Most recently, I’ve been working within the C# ecosystem to develop Windows Services that power real-time
              HMI dashboards via MQTT. I thrive on this intersection of web performance and systems engineering,
              ensuring that every polished React interface is backed by a backend that is fast, secure, and reliable.
            </p>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-bold text-foreground mb-8 uppercase tracking-wider">Core Skills</h3>
          <div className="grid md:grid-cols-3 gap-4">
            {skills.map((skill) => (
              <div
                key={skill.name}
                className="group bg-card border border-border rounded-lg p-6 hover:border-primary hover:shadow-xl transition-all duration-300 cursor-default"
              >
                <div className="text-3xl mb-3">{skill.icon}</div>
                <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                  {skill.name}
                </h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
