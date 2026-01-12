// src/App.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PublicLayout from "./layouts/PublicLayout";
import AdminLayout from "./layouts/AdminLayout";
import ProtectedRoute from "./components/admin/ProtectedRoute";

// Pages
import Home from "./pages/public/Home";
import Shop from "./pages/public/Shop";
import ProductDetail from "./pages/public/ProductDetail";
import About from "./pages/public/About";
import Contact from "./pages/public/Contact";
import Gallery from "./pages/public/Gallery";
import Dashboard from "./pages/admin/Dashboard";
import AdminLogin from "./pages/admin/login";
import Login from "./pages/public/login";
import ProductsAdmin from "./pages/admin/ProductsAdmin";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/login" element={<Login />} />

        <Route path="/" element={<PublicLayout />}>
          <Route index element={<Home />} />
          <Route path="shop" element={<Shop />} />
          <Route path="product/:id" element={<ProductDetail />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="gallery" element={<Gallery />} />
        </Route>

        <Route element={<ProtectedRoute />}>
          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="products" element={<ProductsAdmin />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
