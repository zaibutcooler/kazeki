import { Metadata } from "next"

import { JobFilterValues } from "@/lib/validation"
import { Title } from "@/components/ui/title"
import JobFilterSidebar from "@/components/dashboard/JobFilterSidebar"
import JobResults from "@/components/dashboard/JobResults"

interface PageProps {
  searchParams: {
    q?: string
    type?: string
    location?: string
    remote?: string
    page?: string
  }
}

function getTitle({ q, type, location, remote }: JobFilterValues) {
  const titlePrefix = q
    ? `${q} jobs`
    : type
      ? `${type} developer jobs`
      : remote
        ? "Remote developer jobs"
        : "All developer jobs"

  const titleSuffix = location ? ` in ${location}` : ""

  return `${titlePrefix}${titleSuffix}`
}

export function generateMetadata({
  searchParams: { q, type, location, remote },
}: PageProps): Metadata {
  return {
    title: `${getTitle({
      q,
      type,
      location,
      remote: remote === "true",
    })} | Flow Jobs`,
  }
}
export default async function Page({
  searchParams: { q, type, location, remote, page },
}: PageProps) {
  const filterValues: JobFilterValues = {
    q,
    type,
    location,
    remote: remote === "true",
  }

  return (
    <main className="m-auto my-10 max-w-5xl space-y-10 px-3">
      <div className="space-y-5 text-center">
        <Title>{getTitle(filterValues)}</Title>
        <p className="text-muted-foreground">Find your dream job.</p>
      </div>
      <section className="flex flex-col gap-4 md:flex-row">
        <JobFilterSidebar defaultValues={filterValues} />
        <JobResults
          filterValues={filterValues}
          page={page ? parseInt(page) : undefined}
        />
      </section>
    </main>
  )
}
