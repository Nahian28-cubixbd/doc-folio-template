import { Heart, Activity, Stethoscope, HeartPulse, Microscope, ShieldCheck } from "lucide-react";

const services = [
  {
    icon: Heart,
    title: "Coronary Care",
    desc: "Comprehensive evaluation and treatment of heart artery disease, angina, and heart attacks.",
  },
  {
    icon: Activity,
    title: "ECG & Echocardiography",
    desc: "On-site diagnostic imaging to assess heart rhythm, structure, and function.",
  },
  {
    icon: HeartPulse,
    title: "Hypertension Management",
    desc: "Personalized blood pressure care plans combining lifestyle, monitoring, and medication.",
  },
  {
    icon: Microscope,
    title: "Cardiac Catheterization",
    desc: "Minimally invasive diagnostic procedures with leading hospital partnerships in Dhaka.",
  },
  {
    icon: ShieldCheck,
    title: "Preventive Cardiology",
    desc: "Risk screening and lifestyle counseling to keep your heart strong for decades.",
  },
  {
    icon: Stethoscope,
    title: "General Consultation",
    desc: "Holistic adult medicine consultation including chest pain, palpitations, and breathlessness.",
  },
];

export function Services() {
  return (
    <section id="services" className="py-24 lg:py-32">
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Specializations
          </span>
          <h2 className="mt-4 font-display text-4xl font-medium tracking-tight sm:text-5xl">
            Care tailored to every heart.
          </h2>
          <p className="mt-4 text-muted-foreground">
            From diagnostics to long-term prevention, every service is delivered with
            warmth, clarity, and the latest evidence-based protocols.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <article
              key={s.title}
              className="group relative overflow-hidden rounded-2xl border border-border/60 bg-card p-7 transition-all duration-500 hover:-translate-y-1 hover:border-primary/30 hover:shadow-[var(--shadow-card)]"
            >
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary/10 to-primary-glow/10 text-primary transition-colors group-hover:from-primary group-hover:to-primary-glow group-hover:text-primary-foreground">
                <s.icon className="h-5 w-5" />
              </div>
              <h3 className="font-display text-xl font-semibold tracking-tight">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
