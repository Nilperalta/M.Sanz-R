import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Products from "../pages/Products";
import ProductDetail from "../pages/ProductDetail";
import AdminDashboard from "../pages/admin/AdminDashboard";
import AdminProducts from "../pages/admin/AdminProducts";
import AdminProductForm from "../pages/admin/AdminProductForm";
import AdminLogin from "../pages/admin/AdminLogin";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/productos" element={<Products />} />
      <Route path="/producto/:id" element={<ProductDetail />} />

      {/* Área administrativa preparada para crecer con autenticación/BaaS. */}
      <Route path="/admin/login" element={<AdminLogin />} />
      <Route path="/admin" element={<AdminDashboard />} />
      <Route path="/admin/productos" element={<AdminProducts />} />
      <Route path="/admin/productos/nuevo" element={<AdminProductForm />} />
      <Route path="/admin/productos/:id/editar" element={<AdminProductForm />} />
    </Routes>
  );
}