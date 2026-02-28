"use client";

import { useTranslations } from "next-intl";

import { siteConfig } from "@/config/site";

export function SiteFooter() {
  const t = useTranslations("Footer");

  return (
    <footer className="border-t py-10 md:py-6">
      <div className="container-fluid">
      </div>
    </footer>
  );
}
