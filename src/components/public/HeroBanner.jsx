import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'

export default function HeroBanner() {
  return (
    <div className="relative h-[60vh] md:h-[80vh] overflow-hidden">
      {/* Background Image */}
      <img
        src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=1583&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Hero Car"
        className="w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 flex items-center justify-center md:justify-start md:pl-16">
        <div className="text-white text-center md:text-left max-w-xl">
          <h2 className="text-sm uppercase tracking-widest mb-2">New Technology & Build</h2>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Wheels & Tires Collections</h1>
          <Button asChild variant="secondary" size="lg">
            <Link to="/products">Shop Now</Link>
          </Button>
        </div>
      </div>

      {/* Navigation Arrows (optional for carousel) */}
      <button className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:bg-gray-100">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:bg-gray-100">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  )
}