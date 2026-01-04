import { Outlet, Link, useNavigate } from 'react-router-dom'
import { Button } from '../components/ui/button'

export default function AdminLayout() {
    const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('adminToken'); // Hapus tanda login
    navigate('/'); // Kembali ke home
  };
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar Admin */}
      <aside className="w-64 bg-car-black text-gray-600 p-6 hidden md:block">
        <h2 className="text-2xl font-bold mb-8 text-primary">Admin Panel</h2>
        <nav className="flex flex-col space-y-4">
          <Link to="/admin" className="hover:text-primary transition-colors">Dashboard</Link>
          <Link to="/admin/products" className="hover:text-primary transition-colors">Manage Products</Link>
          <hr className="border-car-gray" />
          <Link to="/" className="text-gray-600 hover:text-primary">Back to Website</Link>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-grow p-8">
        <header className="flex justify-between items-center mb-8 bg-white p-4 rounded-lg shadow-sm">
          <h1 className="text-xl font-semibold text-gray-800">Administrator</h1>
          <Button variant="destructive" size="sm" onClick={handleLogout}>Logout</Button>
        </header>
        <Outlet />
      </main>
    </div>
  )
}