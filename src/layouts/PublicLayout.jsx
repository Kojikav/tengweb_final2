// src/layouts/PublicLayout.jsx
import { Outlet } from 'react-router-dom'
import Navbar from '@/components/public/Navbar'

export default function PublicLayout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <footer className="border-t p-4 text-center text-sm text-muted-foreground">
        © 2026 AutoParts Store - Tugas Akhir Semester
      </footer>
    </div>
  )
}