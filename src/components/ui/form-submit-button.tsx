"use client"

import { useFormStatus } from "react-dom"

import LoadingButton from "./loading-button"

export function FormSubmitButton(
  props: React.ButtonHTMLAttributes<HTMLButtonElement>
) {
  const { pending } = useFormStatus()

  return <LoadingButton {...props} type="submit" loading={pending} />
}
