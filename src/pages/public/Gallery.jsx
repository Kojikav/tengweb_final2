import { Card } from '@/components/ui/card'
import { galleryImages } from '@/lib/mockGallery'

export default function Gallery() {
  return (
    <div className="container mx-auto px-4 p-0 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Our Automotive Gallery</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {galleryImages.map((src, index) => (
          <Card key={index} className="overflow-hidden group p-0">
            <img
              src={src}
              alt={`Car ${index + 1}`}
              className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </Card>
        ))}
      </div>
    </div>
  )
}