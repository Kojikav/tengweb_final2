import { useState, useEffect } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Loader2, Trash2, Plus, Image as ImageIcon } from "lucide-react";

const API_GALLERY = "https://69646251e8ce952ce1f191f2.mockapi.io/gallery";

export default function GalleryAdmin() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [newImage, setNewImage] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const fetchGallery = async () => {
    try {
      const res = await fetch(API_GALLERY);
      const data = await res.json();
      setItems(Array.isArray(data) ? data : []);
    } catch (err) {
      console.error("Failed to fetch gallery");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { fetchGallery(); }, []);

  const handleAddImage = async (e) => {
    e.preventDefault();
    if (!newImage) return;
    setSubmitting(true);
    try {
      await fetch(API_GALLERY, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ image: newImage, title: "Gallery Item" }),
      });
      setNewImage("");
      fetchGallery();
    } catch (err) {
      alert("Gagal menambah gambar");
    } finally {
      setSubmitting(false);
    }
  };

  const handleDelete = async (id) => {
    if (confirm("Hapus gambar dari gallery?")) {
      await fetch(`${API_GALLERY}/${id}`, { method: "DELETE" });
      fetchGallery();
    }
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <ImageIcon size={20} /> Add New Gallery Image
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleAddImage} className="flex gap-4">
            <Input 
              placeholder="Paste Image URL here (https://...)" 
              value={newImage}
              onChange={(e) => setNewImage(e.target.value)}
              disabled={submitting}
            />
            <Button type="submit" disabled={submitting || !newImage}>
              {submitting ? <Loader2 className="animate-spin" /> : <><Plus className="mr-2" /> Add</>}
            </Button>
          </form>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Preview</TableHead>
                <TableHead>Image URL</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {loading ? (
                <TableRow><TableCell colSpan={3} className="text-center py-10"><Loader2 className="animate-spin mx-auto" /></TableCell></TableRow>
              ) : items.map((item) => (
                <TableRow key={item.id}>
                  <TableCell>
                    <img src={item.image} alt="Preview" className="w-16 h-12 object-cover rounded border" />
                  </TableCell>
                  <TableCell className="max-w-xs truncate text-slate-500 text-xs">
                    {item.image}
                  </TableCell>
                  <TableCell className="text-right">
                    <Button variant="ghost" size="sm" onClick={() => handleDelete(item.id)} className="text-red-500 hover:bg-red-50">
                      <Trash2 size={16} />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}