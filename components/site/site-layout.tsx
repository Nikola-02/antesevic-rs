import { Navbar } from "@/components/site/navbar";
import { Footer } from "@/components/site/footer";

export function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-white text-foreground">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
