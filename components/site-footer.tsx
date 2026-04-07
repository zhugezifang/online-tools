"use client";

import { useTranslations } from "next-intl";

import { siteConfig } from "@/config/site";

export function SiteFooter() {
  const t = useTranslations("Footer");

  return (
    <footer className="border-t py-10 md:py-6">
      <div className="container-fluid">
        <div className="flex flex-col items-center justify-center gap-4">
          <a href="https://www.crxsoso.com" target="_blank">Crx搜搜</a>
        </div>
      </div>
    </footer>
  );
}
