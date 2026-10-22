import { Link } from "react-router-dom";
import { useProducts } from "../../hooks/useProducts";


export default function AdminProducts() {
  const { productos, loading, removeProduct } = useProducts();


  return (
    <main className="admin-page">
      <div className="admin-card admin-wide">
        <div className="admin-header">
          <div>
            <p className="eyebrow">PRODUCTOS</p>
            <h1>Gestionar productos</h1>
          </div>

          <Link to="/admin/productos/nuevo" className="btn">
            Nuevo producto
          </Link>
        </div>

        {loading ? (
          <p>Cargando...</p>
        ) : (
          <div className="admin-product-list">
            {productos.map((producto) => (
              <div className="admin-product-row" key={producto.id}>
                <img src={producto.imagen} alt={producto.nombre} />
                <div>
                  <strong>{producto.nombre}</strong>
                  <span>S/ {producto.precio}</span>
                </div>
                <Link to={`/admin/productos/${producto.id}/editar`}>
                  Editar
                </Link>

                <button onClick={() => removeProduct(producto.id)}>
                  Eliminar
                </button>

              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}