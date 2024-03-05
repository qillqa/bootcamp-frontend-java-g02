'use client'

import Header from "@/components/Header";
import { useRouter } from 'next/navigation'

import { Toaster } from "sonner";

export default function HomeLayout({ children }) {
  const router = useRouter()

  const hasToken = Boolean(localStorage.getItem('auth-token')) // undefined -> false, string -> true

  if (!hasToken) {
    router.push('/')
    return
  }

  return (
    <>
      <Header />

      <main className="m-6">
        <div className="container mx-auto">
          {children}
        </div>
      </main>

      <Toaster richColors position="top-right" />
    </>
  )
}