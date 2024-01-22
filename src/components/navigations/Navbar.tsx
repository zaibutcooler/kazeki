import Image from "next/image"
import Link from "next/link"

// import logo from "@/assets/logo.png"

import { Button } from "@/components/ui/button"

export default function Navbar() {
  return (
    <header className="shadow-sm">
      <nav className="m-auto flex max-w-5xl items-center justify-between px-3 py-3">
        <Link href="/" className="flex items-center gap-3">
          <Image src={"/logo.png"} width={40} height={40} alt="Kazeki logo" />
          <span className="text-xl font-bold tracking-tight">Kazeki</span>
        </Link>
        <Button asChild>
          <Link href="/dashboard/jobs/new">Post a job</Link>
        </Button>
      </nav>
    </header>
  )
}
