import { ReactNode } from "react"

export const metadata = { title: "Additional Tools" }

export default function AdditionalToolsLayout({
  children,
}: {
  children: ReactNode
}) {
  return <>{children}</>
}
