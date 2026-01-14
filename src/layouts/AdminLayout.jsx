import { Outlet, Link, useNavigate } from 'react-router-dom'
import { Button } from '../components/ui/button'

export default function AdminLayout() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    navigate('/');
  };

  return (
    <div className="flex min-h-screen bg-gray-100 dark:bg-slate-950">
      {/* Sidebar Admin */}
      <aside className="w-64 bg-slate-900 text-slate-300 p-6 hidden md:block border-r border-slate-800">
        <h2 className="text-2xl font-bold mb-8 text-orange-600">Admin Panel</h2>
        <nav className="flex flex-col space-y-4">
          <Link to="/admin" className="hover:text-orange-600 transition-colors">Dashboard</Link>
          <Link to="/admin/products" className="hover:text-orange-600 transition-colors">Manage Products</Link>
          {/* Menu Baru */}
          <Link to="/admin/gallery" className="hover:text-orange-600 transition-colors">Manage Gallery</Link>
          <hr className="border-slate-800" />
          <Link to="/" className="text-slate-400 hover:text-orange-600">Back to Website</Link>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-grow p-8">
        <header className="flex justify-between items-center mb-8 bg-white dark:bg-slate-900 p-4 rounded-lg shadow-sm border dark:border-slate-800">
          <h1 className="text-xl font-semibold text-slate-800 dark:text-slate-100">Administrator</h1>
          <Button variant="destructive" size="sm" onClick={handleLogout} className="bg-red-600 hover:bg-red-700">
            Logout
          </Button>
        </header>
        <Outlet />
      </main>
    </div>
  )
}