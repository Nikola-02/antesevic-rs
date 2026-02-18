import { SiteLayout } from "@/components/site/site-layout";

export default function PublicLayout({ children }: { children: React.ReactNode }) {
  return <SiteLayout>{children}</SiteLayout>;
}
