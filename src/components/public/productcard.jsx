import { Card, CardContent, CardFooter } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'

export default function ProductCard({ product }) {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow p-0">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-cover object-center rounded-t-lg -mb-4"
      />
      <CardContent className="p-4">
        <div className="text-sm text-muted-foreground mb-1">From ${product.price}</div>
        <h3 className="font-semibold text-lg">{product.name}</h3>
        <p className="text-sm text-muted-foreground mt-2">{product.description}</p>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button asChild variant="outline" className="w-full">
          <Link to={`/product/${product.id}`}>Shop Now</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}