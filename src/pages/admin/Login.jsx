import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button'; // Menggunakan button yang sudah ada
import { Input } from '@/components/ui/input';   // Menggunakan input yang sudah ada

export default function AdminLogin() {
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Logika sederhana: jika password 'admin123'
    if (password === 'admin123') {
      localStorage.setItem('adminToken', 'true');
      navigate('/admin');
    } else {
      alert('Password Salah!');
    }
  };

  return (
    <div className="flex h-screen items-center justify-center bg-gray-100">
      <form onSubmit={handleLogin} className="p-8 bg-white shadow-md rounded-lg">
        <h2 className="text-xl font-bold mb-4 text-orange-600">Admin Login</h2>
        <Input 
          type="password" 
          placeholder="Masukkan Password Admin" 
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="mb-4 text-black"
        />
        <Button type="submit" className="w-full">Login</Button>
      </form>
    </div>
  );
}