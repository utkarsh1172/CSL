import type { Metadata } from "next";

import { ContactPage } from "@/features/contact/components/ContactPage";
import { createPageMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Contact Us",
  description:
    "Contact Canada School of Leadership to speak with a program advisor, explore franchise opportunities or visit our Toronto office.",
  path: "/contact",
});

export default function ContactRoute() {
  return <ContactPage />;
}
