// src/components/ProductModal.jsx
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogClose,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'

export default function ProductModal({ product, open, onOpenChange }) {
  if (!product) return null

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl">{product.name}</DialogTitle>
        </DialogHeader>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Gambar Produk */}
          <div>
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-64 object-cover rounded-lg border"
            />
          </div>

          {/* Info Produk */}
          <div className="space-y-4">
            <div>
              <Label className="text-muted-foreground">Price</Label>
              <p className="text-2xl font-bold text-primary">Rp{product.price.toLocaleString('id-ID')}</p>
            </div>

            <div>
              <Label className="text-muted-foreground">Description</Label>
              <p className="text-sm">{product.description}</p>
            </div>

            <div>
              <Label htmlFor="quantity">Quantity</Label>
              <Input id="quantity" type="number" defaultValue="1" min="1" className="mt-1" />
            </div>
          </div>
        </div>

        <DialogFooter className="gap-2">
          <DialogClose asChild>
            <Button variant="outline">Close</Button>
          </DialogClose>
          <Button>Add to Cart</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}