import Link from "next/link"

import prisma from "@/lib/prisma"
import { Title } from "@/components/ui/title"
import JobListItem from "@/components/dashboard/JobListItem"

export default async function Page() {
  const unapprovedJobs = await prisma.job.findMany({
    where: { approved: false },
  })

  return (
    <main className="m-auto my-10 max-w-5xl space-y-10 px-3">
      <Title className="text-center">Admin Dashboard</Title>
      <section className="flex flex-col gap-3">
        <h2 className="text-lg font-bold">Unapproved jobs:</h2>
        {unapprovedJobs.map((job) => (
          <Link key={job.id} href={`/admin/jobs/${job.slug}`} className="block">
            <JobListItem job={job} />
          </Link>
        ))}
        {unapprovedJobs.length === 0 && (
          <p className="text-muted-foreground">No unapproved jobs</p>
        )}
      </section>
    </main>
  )
}
