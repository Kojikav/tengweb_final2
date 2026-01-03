// src/components/Navbar.jsx
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import MobileMenu from "@/components/public/MobileMenu"; // ← import

export default function Navbar() {
  return (
    <header className="bg-background border-b sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold">
          MYgarage
        </Link>

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
          <Link to="/admin/login">
            <Button
              variant="ghost"
              className="text-gray-800 hover:text-primary"
            >
              Login
            </Button>
          </Link>
          <span className="text-muted-foreground">|</span>
          <Link to="/register">
            <Button
              variant="ghost"
              className="text-gray-800 hover:text-primary"
            >
              Register
            </Button>
          </Link>
          <Button
            variant="ghost"
            size="icon"
            className="text-gray-800 hover:text-primary"
          >
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

        {/* Mobile Menu Trigger */}
        <div className="md:hidden">
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
