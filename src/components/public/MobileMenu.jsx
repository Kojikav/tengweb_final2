// src/components/MobileMenu.jsx
import { useState } from 'react'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Button } from '@/components/ui/button'
import { Menu } from 'lucide-react'
import { Link } from 'react-router-dom'
import ThemeToggle from '@/components/public/ThemeToggle'

export default function MobileMenu() {
  const [open, setOpen] = useState(false)

  // Daftar menu
  const menuItems = [
    { label: 'Home', href: '/' },
    { label: 'Shop', href: '/shop' },
    { label: 'Gallery', href: '/gallery' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ]

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden text-foreground hover:text-primary">
          <Menu className="h-6 w-6" />
        </Button>
      </SheetTrigger>
      <SheetContent
        side="right"
        className="w-[280px] sm:w-[320px] bg-car-black border-l border-car-gray p-6"
      >
        <div className="flex flex-col h-full">
          <div className="py-4 border-b border-car-gray mb-6">
            <h2 className="text-xl font-bold text-white">ESEMKA</h2>
          </div>

          <nav className="flex flex-col space-y-4">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                onClick={() => setOpen(false)} // tutup setelah klik
                className="text-gray-300 hover:text-primary py-2 transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="mt-auto pt-6 border-t border-car-gray">
            <div className="flex justify-between items-center mb-4">
              <span className="text-muted-foreground text-sm">Appearance</span>
              <ThemeToggle />
            </div>
            <div className="flex space-x-4">
              <Link to="/admin/login">
                <Button variant="outline" size="sm" className="border-car-gray text-foreground">
                  Login
                </Button>
              </Link>
              <Link to="/register">
                <Button variant="outline" size="sm" className="border-car-gray text-foreground">
                  Register
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}