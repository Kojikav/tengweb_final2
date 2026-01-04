// src/components/public/Navbar.jsx
import { NavLink, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ThemeToggle from "@/components/public/ThemeToggle";
import MobileMenu from "@/components/public/MobileMenu";
import { ShoppingCart } from "lucide-react";

export default function Navbar() {
  // Helper untuk styling NavLink agar kode lebih bersih
  const navLinkStyles = ({ isActive }) =>
    `relative py-1 transition-colors after:transition-all after:duration-200 after:ease-in-out ${
      isActive
        ? 'text-primary font-semibold after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-primary'
        : 'text-foreground hover:text-primary after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary hover:after:w-full'
    }`;

  return (
    <header className="bg-background border-b border-border sticky top-0 z-50 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          
          {/* Kiri: Logo */}
          <div className="flex items-center">
            <NavLink to="/" className="text-2xl font-bold text-foreground">
              ESEMKA
            </NavLink>
          </div>

          {/* Tengah: Navigasi Desktop */}
          <nav className="hidden md:flex space-x-6">
            <NavLink to="/" className={navLinkStyles}>
              Home
            </NavLink>
            <NavLink to="/shop" className={navLinkStyles}>
              Shop
            </NavLink>
            <NavLink to="/gallery" className={navLinkStyles}>
              Gallery
            </NavLink>
            <NavLink to="/about" className={navLinkStyles}>
              About
            </NavLink>
            <NavLink to="/contact" className={navLinkStyles}>
              Contact
            </NavLink>
          </nav>

          {/* Kanan: Auth, Theme, & Cart */}
          <div className="flex items-center space-x-4">
            <div className="hidden md:block">
              <ThemeToggle />
            </div>
            
            <div className="hidden md:flex items-center space-x-2">
              <Link to="/admin-login">
                <Button variant="ghost" className="text-foreground hover:text-primary text-sm">
                  Login
                </Button>
              </Link>
              <span className="text-muted-foreground">|</span>
              <Link to="/register">
                <Button variant="ghost" className="text-foreground hover:text-primary text-sm">
                  Register
                </Button>
              </Link>
              
              {/* Cart Icon */}
              <Button variant="ghost" size="icon" className="text-foreground hover:text-primary">
                <ShoppingCart className="h-6 w-6" />
              </Button>
            </div>

            {/* Mobile menu - hanya muncul di layar kecil */}
            <div className="md:hidden flex items-center space-x-2">
              <ThemeToggle />
              <MobileMenu />
            </div>
          </div>

        </div>
      </div>
    </header>
  );
}