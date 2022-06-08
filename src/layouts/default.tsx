import type { ReactNode } from 'react'
import Navbar from '~/components/Header/Navbar'

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <main className="">
      <Navbar />
      <main>{children}</main>
    </main>
  )
}
