import type { Metadata } from "next";

import { siteConfig } from "@/lib/site-config";
import "../globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
};

type RedirectLayoutProps = {
  children: React.ReactNode;
};

export default function RedirectLayout({ children }: RedirectLayoutProps) {
  return (
    <html lang="tr">
      <body>{children}</body>
    </html>
  );
}
