import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Loader2, ArrowLeft, MessageCircle } from "lucide-react";

export default function ProductDetail() {
  const { id } = useParams(); // Mengambil ID dari URL
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const API_URL = `https://69646251e8ce952ce1f191f2.mockapi.io/catalog/${id}`;

  useEffect(() => {
    const fetchProductDetail = async () => {
      try {
        setLoading(true);
        const response = await fetch(API_URL);
        if (!response.ok) {
          throw new Error("Produk tidak ditemukan atau server bermasalah");
        }
        const data = await response.json();
        setProduct(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProductDetail();
  }, [id]);

  const handleWhatsApp = () => {
    if (!product) return;
    const message = `Halo, saya tertarik dengan kendaraan *${product.name}* yang terdaftar di website. Apakah stok masih tersedia?`;
    window.open(
      `https://wa.me/6283821715020?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh]">
        <Loader2 className="h-10 w-10 animate-spin text-blue-600 mb-2" />
        <p className="text-muted-foreground">Memuat detail kendaraan...</p>
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h2 className="text-2xl font-bold text-red-600 mb-4">
          Ups! Terjadi Kesalahan
        </h2>
        <p className="mb-6">{error || "Produk tidak tersedia."}</p>
        <Button onClick={() => navigate("/")}>Kembali ke Katalog</Button>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-10">
      <Button
        variant="ghost"
        className="mb-6 group"
        onClick={() => navigate(-1)}
      >
        <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
        Kembali
      </Button>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 p-6 rounded-2xl shadow-sm">
        {/* Kolom Gambar */}
        <div className="overflow-hidden rounded-xl  h-80 md:h-full">
          <img
            src={product.image || "https://placehold.co/600x400?text=No+Image"}
            alt={product.name}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
          />
        </div>

        {/* Kolom Informasi */}
        <div className="flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-start mb-4">
              <h1 className="text-3xl font-bold text-foreground">
                {product.name}
              </h1>
              <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-semibold">
                Stok: {product.stock}
              </span>
            </div>

            <p className="text-2xl font-bold text-foreground mb-6">
              $ {Number(product.price).toLocaleString("id-ID")}
            </p>

            <div className="space-y-4">
              <h3 className="font-semibold text-foreground border-b pb-2">
                Deskripsi Kendaraan
              </h3>
              <p className="text-foreground leading-relaxed italic">
                {product.description || "Tidak ada deskripsi untuk produk ini."}
              </p>
            </div>
          </div>

          <div className="mt-10">
            <Button
              onClick={handleWhatsApp}
              className="w-full py-6 text-lg bg-green-600 hover:bg-green-700 shadow-lg shadow-foreground/10 flex items-center justify-center"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Hubungi via WhatsApp
            </Button>
            <p className="text-center text-xs text-gray-400 mt-3">
              *Harga dapat berubah sewaktu-waktu sesuai kebijakan dealer.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
