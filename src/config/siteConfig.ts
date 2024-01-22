export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "Kazeki",
  description: "Ai driven app for Real Estate Agents and Property Managers",
  mainNav: [],
  url: process.env.WEBSITE_URL,
  links: {
    twitter: "https://twitter.com/zaibutcooler",
    docs: `${process.env.WEBSITE_URL}/about`,
  },
}
