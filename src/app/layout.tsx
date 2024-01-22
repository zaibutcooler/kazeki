import type { Metadata } from "next"
import { Inter } from "next/font/google"

import "./globals.css"

import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"

import { siteMetaData } from "@/config/metadata"
import Footer from "@/components/navigations/Footer"
import Navbar from "@/components/navigations/Navbar"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = siteMetaData

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <SpeedInsights />
        <Analytics />
        <Footer />
      </body>
    </html>
  )
}
