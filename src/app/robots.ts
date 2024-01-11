import { MetadataRoute } from "next"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",

      disallow: "/private/",
    },
    sitemap: `${process.env.WEBSITE_URL}/sitemap.xml`,
  }
}
