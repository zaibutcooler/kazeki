import { Metadata } from "next"

import { siteConfig } from "@/config/siteConfig"

export const siteMetaData: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  metadataBase: new URL(`${process.env.WEBSITE_URL}`),
  description: siteConfig.description,
  keywords: [
    "Real Estate",
    "Property Description",
    "Realtor",
    "Real Estate Ai",
  ],
  authors: [
    {
      name: "zai",
      url: "https://zaibutcooler.vercel.app",
    },
  ],
  creator: "zai",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    images: ["/thumbnail.png"],
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: ["/thumbnail.png"],
    creator: "@zaibutcooler",
  },
  icons: {
    icon: "/icon/favicon.ico",
    shortcut: "/icon/favicon-16x16.png",
    apple: "/icon/apple-touch-icon.png",
  },

  manifest: `${siteConfig.url}/site.webmanifest`,
}
