import { useState } from "react";
import { z } from "zod";
import { MessageCircle, Mail, Phone, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

const WHATSAPP_NUMBER = "8801711000000";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  phone: z.string().trim().min(6, "Phone is required").max(20),
  message: z.string().trim().min(5, "Please add a short message").max(1000),
});

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = contactSchema.safeParse(form);
    if (!result.success) {
      toast.error(result.error.issues[0]?.message ?? "Please check the form");
      return;
    }
    setSubmitting(true);
    const text = `Hello Dr. Farhan,%0A%0AName: ${encodeURIComponent(result.data.name)}%0AEmail: ${encodeURIComponent(result.data.email)}%0APhone: ${encodeURIComponent(result.data.phone)}%0A%0A${encodeURIComponent(result.data.message)}`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, "_blank", "noopener,noreferrer");
    toast.success("Opening WhatsApp to send your message…");
    setForm({ name: "", email: "", phone: "", message: "" });
    setSubmitting(false);
  };

  return (
    <section id="contact" className="bg-[var(--gradient-soft)] py-24 lg:py-32">
      <div className="container mx-auto px-6">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr]">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Get in Touch
            </span>
            <h2 className="mt-4 font-display text-4xl font-medium tracking-tight sm:text-5xl">
              Have a question? <br />Reach out anytime.
            </h2>
            <p className="mt-4 max-w-md text-muted-foreground">
              Whether you'd like to book an appointment or simply ask about your symptoms,
              I'm here to help. The fastest reply comes via WhatsApp.
            </p>

            <div className="mt-10 space-y-4">
              <ContactRow
                icon={<MessageCircle />}
                label="WhatsApp"
                value="+880 1711 000000"
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
              />
              <ContactRow
                icon={<Phone />}
                label="Chamber"
                value="+880 2 9663425"
                href="tel:+88029663425"
              />
              <ContactRow
                icon={<Mail />}
                label="Email"
                value="dr.farhan@example.com"
                href="mailto:dr.farhan@example.com"
              />
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="rounded-3xl border border-border/60 bg-card p-8 shadow-[var(--shadow-card)] sm:p-10"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <Field id="name" label="Full Name">
                <Input
                  id="name"
                  required
                  maxLength={100}
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Your name"
                />
              </Field>
              <Field id="phone" label="Phone">
                <Input
                  id="phone"
                  required
                  maxLength={20}
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  placeholder="+880 …"
                />
              </Field>
            </div>
            <Field id="email" label="Email" className="mt-5">
              <Input
                id="email"
                type="email"
                required
                maxLength={255}
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="you@email.com"
              />
            </Field>
            <Field id="message" label="Message" className="mt-5">
              <Textarea
                id="message"
                required
                maxLength={1000}
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="Briefly describe your concern…"
              />
            </Field>
            <Button
              type="submit"
              size="lg"
              disabled={submitting}
              className="mt-6 w-full rounded-full shadow-lg shadow-primary/30"
            >
              <Send className="mr-2 h-4 w-4" />
              Send via WhatsApp
            </Button>
            <p className="mt-3 text-center text-xs text-muted-foreground">
              In a medical emergency, please call 999 immediately.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}

function Field({
  id,
  label,
  children,
  className = "",
}: {
  id: string;
  label: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={className}>
      <Label htmlFor={id} className="mb-2 block text-xs font-semibold uppercase tracking-wider text-muted-foreground">
        {label}
      </Label>
      {children}
    </div>
  );
}

function ContactRow({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center gap-4 rounded-2xl border border-border/60 bg-card p-4 transition-all hover:border-primary/40 hover:shadow-sm"
    >
      <span className="flex h-11 w-11 items-center justify-center rounded-full bg-primary/10 text-primary [&>svg]:h-5 [&>svg]:w-5">
        {icon}
      </span>
      <div>
        <div className="text-xs uppercase tracking-wider text-muted-foreground">{label}</div>
        <div className="font-medium text-foreground">{value}</div>
      </div>
    </a>
  );
}
