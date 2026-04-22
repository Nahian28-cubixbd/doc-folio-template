import { ArrowRight, Award, Heart, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import drFarhan from "@/assets/dr-farhan.jpg";

const WHATSAPP_URL = "https://wa.me/8801711000000?text=Hello%20Dr.%20Farhan%2C%20I%27d%20like%20to%20book%20an%20appointment.";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_oklch(0.68_0.13_195/0.18),_transparent_60%)]" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_bottom_left,_oklch(0.72_0.15_35/0.12),_transparent_55%)]" />

      <div className="container mx-auto grid gap-12 px-6 py-20 lg:grid-cols-[1.1fr_1fr] lg:gap-16 lg:py-28">
        <div className="flex flex-col justify-center animate-fade-up">
          <span className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-medium uppercase tracking-wider text-primary">
            <span className="h-1.5 w-1.5 rounded-full bg-success animate-pulse-ring" />
            Accepting New Patients
          </span>

          <h1 className="font-display text-5xl font-medium leading-[1.05] tracking-tight text-foreground sm:text-6xl lg:text-7xl">
            Compassionate care for a <em className="text-primary not-italic">healthier</em> heart.
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
            Dr. Farhan Ahmed — MBBS, FCPS (Cardiology). Consultant Cardiologist with
            over 12 years of experience helping patients across Dhaka live longer,
            stronger lives.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild size="lg" className="rounded-full px-7 shadow-lg shadow-primary/30">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                Book on WhatsApp
                <ArrowRight className="ml-1 h-4 w-4" />
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full px-7">
              <a href="#services">Explore Services</a>
            </Button>
          </div>

          <div className="mt-12 grid grid-cols-3 gap-6 border-t border-border/60 pt-8">
            <Stat icon={<Users className="h-4 w-4" />} value="15K+" label="Patients" />
            <Stat icon={<Heart className="h-4 w-4" />} value="12+" label="Years" />
            <Stat icon={<Award className="h-4 w-4" />} value="98%" label="Satisfaction" />
          </div>
        </div>

        <div className="relative flex items-center justify-center">
          <div className="absolute inset-8 rounded-[2.5rem] bg-gradient-to-br from-primary/30 to-accent/20 blur-2xl" />
          <div className="relative animate-float">
            <div className="absolute -inset-2 rounded-[2rem] bg-gradient-to-br from-primary to-primary-glow opacity-90" />
            <img
              src={drFarhan}
              alt="Dr. Farhan Ahmed, Cardiologist"
              width={1024}
              height={1024}
              className="relative h-[480px] w-[400px] rounded-[2rem] object-cover shadow-2xl"
            />
            <div className="absolute -bottom-6 -left-6 flex items-center gap-3 rounded-2xl border border-border/60 bg-card/95 p-4 shadow-xl backdrop-blur">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-success/10 text-success">
                <Heart className="h-5 w-5 fill-current" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Specialty</p>
                <p className="text-sm font-semibold">Interventional Cardiology</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ icon, value, label }: { icon: React.ReactNode; value: string; label: string }) {
  return (
    <div>
      <div className="mb-2 flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary">
        {icon}
      </div>
      <div className="font-display text-2xl font-semibold tracking-tight">{value}</div>
      <div className="text-xs uppercase tracking-wider text-muted-foreground">{label}</div>
    </div>
  );
}
