// src/App.jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import PublicLayout from './layouts/PublicLayout'

// Pages
import Home from './pages/public/Home'
import Shop from './pages/public/Shop'
import ProductDetail from './pages/public/ProductDetail'
import About from './pages/public/About'
import Contact from './pages/public/Contact'
import Gallery from './pages/public/Gallery'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PublicLayout />}>
          <Route index element={<Home />} />
          <Route path="shop" element={<Shop />} />
          <Route path="product/:id" element={<ProductDetail />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="gallery" element={<Gallery />} /> {/* ✅ */}
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App