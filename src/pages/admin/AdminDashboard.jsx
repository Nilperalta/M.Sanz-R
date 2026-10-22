import { Link } from "react-router-dom";

export default function AdminDashboard() {
  return (
    <main className="admin-page">
      <div className="admin-card">
        <p className="eyebrow">PANEL</p>
        <h1>Administración</h1>
        <p>Zona preparada para gestionar la tienda.</p>

        <div className="admin-actions">
          <Link to="/admin/productos" className="btn">Gestionar productos</Link>
        </div>
      </div>
    </main>
  );
}