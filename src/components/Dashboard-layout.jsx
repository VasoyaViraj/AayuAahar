import React from "react"
import { Navbar } from "@/components/navbar"
import { Sidebar } from "@/components/Sidebar"

export function DashboardLayout({ children }) {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="flex">
        <Sidebar />
        <main className="flex-1 overflow-hidden">
          <div className="container mx-auto p-6">{children}</div>
        </main>
      </div>
    </div>
  )
}