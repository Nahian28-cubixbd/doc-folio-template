import { Stethoscope } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border/60 bg-background py-10">
      <div className="container mx-auto flex flex-col items-center gap-4 px-6 text-center sm:flex-row sm:justify-between sm:text-left">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-primary to-primary-glow text-primary-foreground">
            <Stethoscope className="h-4 w-4" />
          </div>
          <span className="font-display font-semibold">Dr. Farhan Ahmed</span>
        </div>
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Dr. Farhan Ahmed. MBBS, FCPS (Cardiology). Dhaka, Bangladesh.
        </p>
      </div>
    </footer>
  );
}
