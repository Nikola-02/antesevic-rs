"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema } from "@/lib/schemas";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useLocale } from "@/lib/i18n/locale-context";

type ContactValues = z.infer<typeof contactSchema>;

export function ContactForm() {
  const [status, setStatus] = useState<string>("");
  const { t } = useLocale();
  const form = useForm<ContactValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: "", email: "", message: "" },
  });

  const onSubmit = form.handleSubmit(async (values) => {
    setStatus("");
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    });

    if (!response.ok) {
      setStatus(t.contactForm.error);
      return;
    }

    form.reset();
    setStatus(t.contactForm.success);
  });

  return (
    <form onSubmit={onSubmit} className="grid gap-4">
      <Input placeholder={t.contactForm.name} {...form.register("name")} />
      <Input placeholder={t.contactForm.email} type="email" {...form.register("email")} />
      <Textarea
        placeholder={t.contactForm.message}
        rows={5}
        {...form.register("message")}
      />
      <Button type="submit" className="w-full sm:w-fit">
        {t.contactForm.submit}
      </Button>
      {status ? <p className="text-sm text-muted">{status}</p> : null}
    </form>
  );
}
