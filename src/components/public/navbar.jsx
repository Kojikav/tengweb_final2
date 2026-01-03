// src/components/Navbar.jsx
import { NavLink, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ThemeToggle from "@/components/public/ThemeToggle";
import MobileMenu from "@/components/public/MobileMenu";

export default function Navbar() {
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

        <nav className="hidden md:flex space-x-6">
          <Link
            to="/"
            className="text-gray-800 hover:text-primary transition-colors"
          >
            Home
          </Link>

          <Link
            to="/shop"
            className="text-gray-800 hover:text-primary transition-colors"
          >
            Shop
          </Link>
          <Link
            to="/gallery"
            className="text-gray-800 hover:text-primary transition-colors"
          >
            Gallery
          </Link>
          <Link
            to="/about"
            className="text-gray-800 hover:text-primary transition-colors"
          >
            About
          </Link>
          <Link
            to="/contact"
            className="text-gray-800 hover:text-primary transition-colors"
          >
            Contact
          </Link>
        </nav>

        {/* Auth & Cart - desktop only */}
        <div className="hidden md:flex items-center space-x-4">
          <Link to="/login">
            <Button
              variant="ghost"
              className="text-gray-800 hover:text-primary"
            >
              Home
            </NavLink>
            <NavLink
              to="/shop"
              className={({ isActive }) =>
                `relative transition-colors after:transition-all after:duration-200 after:ease-in-out ${
                  isActive
                    ? 'text-primary font-semibold after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-primary'
                    : 'text-foreground hover:text-primary after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary hover:after:w-full'
                }`
              }
            >
              Shop
            </NavLink>
            <NavLink
              to="/gallery"
              className={({ isActive }) =>
                `relative transition-colors after:transition-all after:duration-200 after:ease-in-out ${
                  isActive
                    ? 'text-primary font-semibold after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-primary'
                    : 'text-foreground hover:text-primary after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary hover:after:w-full'
                }`
              }
            >
              Gallery
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `relative transition-colors after:transition-all after:duration-200 after:ease-in-out ${
                  isActive
                    ? 'text-primary font-semibold after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-primary'
                    : 'text-foreground hover:text-primary after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary hover:after:w-full'
                }`
              }
            >
              About
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `relative transition-colors after:transition-all after:duration-200 after:ease-in-out ${
                  isActive
                    ? 'text-primary font-semibold after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-primary'
                    : 'text-foreground hover:text-primary after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary hover:after:w-full'
                }`
              }
            >
              Contact
            </NavLink>
          </nav>

          {/* Kanan: Auth + Theme */}
          <div className="flex items-center space-x-4">
            <div className="hidden md:block">
              <ThemeToggle />
            </div>
            <div className="hidden md:flex items-center space-x-2">
              <Link to="/admin/login">
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
              <Button variant="ghost" size="icon" className="text-foreground hover:text-primary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 3h2l.4 2M7 13h10v8a2 2 0 002 2H5a2 2 0 002-2v-8zm5-1a2 2 0 110-4 2 2 0 010 4z"
                  />
                </svg>
              </Button>
            </div>
            {/* Mobile menu hanya di mobile */}
            <div className="md:hidden">
              <MobileMenu />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}