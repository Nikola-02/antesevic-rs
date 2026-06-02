import { createOrganizationJsonLd } from "@/lib/seo";

export function JsonLd() {
  const data = createOrganizationJsonLd();

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
