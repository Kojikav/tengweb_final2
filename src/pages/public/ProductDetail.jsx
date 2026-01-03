import { useParams } from 'react-router-dom'
import { products } from '@/lib/mockProducts'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { useState } from 'react'

export default function ProductDetail() {
  const { id } = useParams()
  const product = products.find(p => p.id === parseInt(id))

  const [quantity, setQuantity] = useState(1)

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <h2 className="text-2xl">Product not found</h2>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Gambar Produk */}
        <div>
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-auto rounded-lg border"
          />
        </div>

        {/* Info Produk */}
        <div>
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
          <p className="text-2xl font-semibold text-primary mb-4">Rp{product.price.toLocaleString('id-ID')}</p>
          <p className="text-muted-foreground mb-6">{product.description}</p>

          <div className="flex items-center gap-4 mb-6">
            <label className="text-sm font-medium">Quantity:</label>
            <div className="flex border rounded-md">
              <button
                onClick={() => setQuantity(q => Math.max(1, q - 1))}
                className="px-3 py-1 border-r"
              >
                -
              </button>
              <span className="px-4 py-1">{quantity}</span>
              <button
                onClick={() => setQuantity(q => q + 1)}
                className="px-3 py-1 border-l"
              >
                +
              </button>
            </div>
          </div>

          <div className="flex gap-4">
            <Button size="lg" className="flex-1">Add to Cart</Button>
            <Button variant="outline" size="lg">Buy Now</Button>
          </div>
        </div>
      </div>

      {/* Deskripsi Lengkap (opsional) */}
      <Card className="mt-12">
        <CardContent className="p-6">
          <h2 className="text-xl font-semibold mb-4">Product Details</h2>
          <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
            <li>High-quality automotive parts</li>
            <li>1-year warranty</li>
            <li>Free shipping for orders above Rp500.000</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}