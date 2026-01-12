// src/layouts/PublicLayout.jsx
import { Outlet } from 'react-router-dom'
import Navbar from '@/components/public/Navbar'

export default function PublicLayout() {
  return (
    <div className="w-full max-w-screen-xl mx-auto flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <footer className="border-t p-4 text-center text-sm text-muted-foreground">
        © 2026 ESEMKA - Tekweb Hore
      </footer>
    </div>
  )
}