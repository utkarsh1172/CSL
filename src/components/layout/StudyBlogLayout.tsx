import type { ReactNode } from "react";
import Link from "next/link";
import { SiteHeader } from "./SiteHeader";

type StudyBlogLayoutProps = {
  children: ReactNode;
};

export function StudyBlogLayout({ children }: StudyBlogLayoutProps) {
  return (
    <>
      <SiteHeader />
      <main className="study-blog-layout">{children}</main>
    </>
  );
}