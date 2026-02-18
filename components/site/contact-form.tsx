"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema } from "@/lib/schemas";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

type ContactValues = z.infer<typeof contactSchema>;

export function ContactForm() {
  const [status, setStatus] = useState<string>("");
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
      setStatus("Poruka nije poslata. Pokusaj ponovo.");
      return;
    }

    form.reset();
    setStatus("Poruka je uspesno poslata.");
  });

  return (
    <form onSubmit={onSubmit} className="grid gap-4">
      <Input placeholder="Ime i prezime" {...form.register("name")} />
      <Input placeholder="Email adresa" type="email" {...form.register("email")} />
      <Textarea
        placeholder="Poruka"
        rows={5}
        {...form.register("message")}
      />
      <Button type="submit" className="w-fit">
        Posalji poruku
      </Button>
      {status ? <p className="text-sm text-muted">{status}</p> : null}
    </form>
  );
}
