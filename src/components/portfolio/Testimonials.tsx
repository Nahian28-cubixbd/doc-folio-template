import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "Ayesha Rahman",
    role: "Patient, Gulshan",
    quote:
      "Dr. Farhan listened patiently to every concern. His explanation made my treatment plan feel simple and reassuring. My blood pressure is finally under control.",
  },
  {
    name: "Mohammad Karim",
    role: "Patient, Dhanmondi",
    quote:
      "After my heart attack, I was scared and lost. Dr. Farhan guided my recovery step by step. Today I am back to walking 5 km every morning.",
  },
  {
    name: "Sadia Hossain",
    role: "Daughter of patient",
    quote:
      "He treated my father like family. The chamber staff is kind and the appointments always start on time. Highly recommended for anyone in Dhaka.",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-24 lg:py-32">
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Patient Voices
          </span>
          <h2 className="mt-4 font-display text-4xl font-medium tracking-tight sm:text-5xl">
            Trusted by thousands of families.
          </h2>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="relative flex flex-col rounded-3xl border border-border/60 bg-card p-8 shadow-sm"
            >
              <Quote className="h-8 w-8 text-primary/20" />
              <div className="mt-2 flex gap-0.5 text-accent">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-foreground/90">
                "{t.quote}"
              </blockquote>
              <figcaption className="mt-6 border-t border-border/60 pt-4">
                <div className="font-semibold">{t.name}</div>
                <div className="text-xs text-muted-foreground">{t.role}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
