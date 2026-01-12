import { useState, useEffect } from "react";
import { Loader2, Package } from "lucide-react"; // Pastikan lucide-react terinstall

export default function Dashboard() {
  const [totalProducts, setTotalProducts] = useState(0);
  const [loading, setLoading] = useState(true);

  // Endpoint MockAPI Anda
  const API_URL = "https://69646251e8ce952ce1f191f2.mockapi.io/catalog";

  useEffect(() => {
    const fetchTotalData = async () => {
      try {
        setLoading(true);
        const response = await fetch(API_URL);
        if (response.ok) {
          const data = await response.json();
          // Menghitung jumlah item dalam array data [cite: 20]
          setTotalProducts(Array.isArray(data) ? data.length : 0);
        }
      } catch (error) {
        console.error("Gagal memuat data dashboard:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTotalData();
  }, []);

  return (
    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">Welcome, Admin!</h2>
          <p className="text-muted-foreground text-sm">
            Di sini Anda bisa memantau statistik ESEMKA secara real-time.
          </p>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
        <div className="p-6 bg-gradient-to-br from-primary to-primary/80 border border-primary/20 rounded-xl shadow-sm transition-all hover:shadow-md">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-white/90 text-sm uppercase tracking-wider">Total Products</h3>
            <Package className="text-white/60 h-5 w-5" />
          </div>
          
          {loading ? (
            <div className="flex items-center gap-2">
              <Loader2 className="h-6 w-6 animate-spin text-white" />
              <span className="text-white/70 text-sm italic">Calculating...</span>
            </div>
          ) : (
            <div>
              <p className="text-4xl font-extrabold text-white">{totalProducts}</p>
              <p className="text-white/60 text-xs mt-2 font-medium">
                Jumlah total produk yang tersedia di katalog.
              </p>
            </div>
          )}
        </div>

        {/* Anda bisa menambahkan kartu statistik lainnya di sini nanti */}
        <div className="p-6 bg-white border border-gray-200 rounded-xl shadow-sm opacity-50">
          <h3 className="font-semibold text-gray-500 text-sm uppercase tracking-wider mb-4">Total Sales</h3>
          <p className="text-4xl font-extrabold text-gray-300">Soon</p>
        </div>
      </div>
    </div>
  );
}