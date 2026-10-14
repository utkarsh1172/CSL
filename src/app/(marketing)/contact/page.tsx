import type { Metadata } from "next";

import { ContactPage } from "@/features/contact/components/ContactPage";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact Canada School of Leadership to speak with a program advisor, explore franchise opportunities or visit our Toronto office.",
};

export default function ContactRoute() {
  return <ContactPage />;
}
