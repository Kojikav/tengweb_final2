import { useState, useEffect } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea"; // Pastikan Anda mengimpor Textarea [cite: 14, 15]
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Loader2, Plus, Trash2, Edit } from "lucide-react";

const API_URL = "https://69646251e8ce952ce1f191f2.mockapi.io/catalog";

export default function ProductsAdmin() {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [isAdding, setIsAdding] = useState(false);
  const [editingId, setEditingId] = useState(null);
  
  // Menambahkan field 'description' ke dalam initial state form 
  const [form, setForm] = useState({ 
    name: "", 
    price: "", 
    description: "", 
    image: "", 
    stock: "" 
  });
  
  const [message, setMessage] = useState({ type: "", text: "" });

  const fetchCars = async () => {
    try {
      const res = await fetch(API_URL);
      const data = await res.json();
      setCars(Array.isArray(data) ? data : []);
    } catch (err) {
      setMessage({ type: "error", text: "Gagal memuat data." });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { fetchCars(); }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    const method = editingId ? "PUT" : "POST";
    const url = editingId ? `${API_URL}/${editingId}` : API_URL;

    try {
      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        // Field description otomatis ikut terkirim di sini 
        body: JSON.stringify({ ...form, stock: Number(form.stock) }),
      });

      if (res.ok) {
        setMessage({ type: "success", text: `Berhasil ${editingId ? "memperbarui" : "menambah"} data.` });
        resetForm();
        fetchCars();
      }
    } catch (err) {
      setMessage({ type: "error", text: "Terjadi kesalahan." });
    } finally {
      setSubmitting(false);
    }
  };

  const handleDelete = async (id) => {
    if (confirm("Apakah Anda yakin ingin menghapus data ini?")) {
      await fetch(`${API_URL}/${id}`, { method: "DELETE" }); // Implementasi DELETE 
      fetchCars();
    }
  };

  const resetForm = () => {
    setForm({ name: "", price: "", description: "", image: "", stock: "" });
    setEditingId(null);
    setIsAdding(false);
  };

  if (loading) return <Loader2 className="animate-spin m-auto" />;

  return (
    <Card className="m-6">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Kelola Kendaraan</CardTitle>
        <Button onClick={() => setIsAdding(!isAdding)}>{isAdding ? "Batal" : "Tambah Mobil"}</Button>
      </CardHeader>
      <CardContent>
        {isAdding && (
          <form onSubmit={handleSubmit} className="mb-6 space-y-3 p-4 border rounded-lg">
            <Input 
              placeholder="Nama Mobil" 
              value={form.name} 
              onChange={(e) => setForm({...form, name: e.target.value})} 
              required 
            />
            <Input 
              placeholder="Harga" 
              type="number" 
              value={form.price} 
              onChange={(e) => setForm({...form, price: e.target.value})} 
              required 
            />
            <Input 
              placeholder="URL Gambar" 
              value={form.image} 
              onChange={(e) => setForm({...form, image: e.target.value})} 
              required 
            />
            <Input 
              placeholder="Stok" 
              type="number" 
              value={form.stock} 
              onChange={(e) => setForm({...form, stock: e.target.value})} 
              required 
            />
            {/* Input Deskripsi menggunakan Textarea  */}
            <Textarea 
              placeholder="Deskripsi Mobil" 
              value={form.description} 
              onChange={(e) => setForm({...form, description: e.target.value})} 
              required 
            />
            <Button type="submit" disabled={submitting}>
              {submitting ? "Menyimpan..." : editingId ? "Update" : "Simpan"}
            </Button>
          </form>
        )}
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Mobil</TableHead>
              <TableHead>Harga</TableHead>
              <TableHead>Stok</TableHead>
              <TableHead className="text-right">Aksi</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {cars.map((car) => (
              <TableRow key={car.id}>
                <TableCell>{car.name}</TableCell>
                <TableCell>$ {Number(car.price).toLocaleString()}</TableCell>
                <TableCell>{car.stock}</TableCell>
                <TableCell className="text-right space-x-2">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    onClick={() => { setForm(car); setEditingId(car.id); setIsAdding(true); }}
                  >
                    <Edit size={14}/>
                  </Button>
                  <Button 
                    variant="destructive" 
                    size="sm" 
                    onClick={() => handleDelete(car.id)}
                  >
                    <Trash2 size={14}/>
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}