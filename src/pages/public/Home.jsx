import HeroBanner from '@/components/public/HeroBanner'
import ProductCard from '@/components/public/ProductCard'
import { products } from '@/lib/mockProducts'
import { Card } from '@/components/ui/card'

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Banner */}
      <HeroBanner />

      {/* Product Section */}
      <section className="py-12 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold mb-8 text-center">Featured Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}