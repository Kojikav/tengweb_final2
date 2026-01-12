// src/pages/public/ErrorPage.jsx
import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'

export default function ErrorPage() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="text-center max-w-md">
        {/* Ikon atau ilustrasi (opsional) */}
        <div className="w-24 h-24 mx-auto mb-6 flex items-center justify-center bg-primary/10 rounded-full">
          <span className="text-5xl font-bold text-primary">404</span>
        </div>

        <h1 className="text-3xl font-bold text-foreground mb-4">Page Not Found</h1>
        <p className="text-muted-foreground mb-8">
          Oops! The page you're looking for doesn't exist or has been moved.
        </p>

        <Button asChild className="bg-red-600 hover:bg-red-700">
          <Link to="/">Back to Home</Link>
        </Button>
      </div>
    </div>
  )
}