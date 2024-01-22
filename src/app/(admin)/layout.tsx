import { Metadata } from "next"
import { ClerkProvider } from "@clerk/nextjs"

import AdminNavbar from "@/components/navigations/AdminNavbar"

export const metadata: Metadata = {
  title: "Admin",
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider>
      <AdminNavbar />
      {children}
    </ClerkProvider>
  )
}
