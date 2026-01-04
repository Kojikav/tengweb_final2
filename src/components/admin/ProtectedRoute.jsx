import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = () => {
  // Mengecek status login dari localStorage
  const isAuthenticated = localStorage.getItem('adminToken') === 'true';

  if (!isAuthenticated) {
    // Jika belum login, diarahkan ke halaman login admin
    return <Navigate to="/admin-login" replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;