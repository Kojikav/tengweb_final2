import { useState, useEffect } from "react";
import ProductCard from "@/components/public/productcard";
import { Loader2 } from "lucide-react"; // Pastikan lucide-react terinstall

export default function Shop() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const API_URL = "https://69646251e8ce952ce1f191f2.mockapi.io/catalog";

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const response = await fetch(API_URL);
        if (!response.ok) {
          throw new Error("Gagal mengambil data produk");
        }
        const data = await response.json();
        setProducts(Array.isArray(data) ? data : []);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-foreground mb-2">Our Products</h2>
        <p className="text-muted-foreground">Explore our latest collection of premium vehicles</p>
      </div>

      {/* Menangani Asynchronous State: Loading [cite: 119] */}
      {loading && (
        <div className="flex flex-col items-center justify-center py-20">
          <Loader2 className="h-10 w-10 animate-spin text-blue-600 mb-4" />
          <p className="text-gray-500 italic">Loading our inventory...</p>
        </div>
      )}

      {/* Menangani Asynchronous State: Error [cite: 119] */}
      {error && (
        <div className="text-center py-20 bg-red-50 rounded-lg border border-red-200">
          <p className="text-red-600 font-semibold">Error: {error}</p>
          <button 
            onClick={() => window.location.reload()}
            className="mt-4 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
          >
            Try Again
          </button>
        </div>
      )}

      {/* Menangani Asynchronous State: Empty State  */}
      {!loading && !error && products.length === 0 && (
        <div className="text-center py-20">
          <p className="text-gray-500">No products available at the moment.</p>
        </div>
      )}

      {/* Display Grid Produk Dinamis  */}
      {!loading && !error && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}