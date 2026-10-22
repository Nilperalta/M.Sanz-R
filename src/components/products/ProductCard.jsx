import { Link } from "react-router-dom";

export default function ProductCard({ producto }) {
  return (
    <article className="product-card">
      <Link to={`/producto/${producto.id}`} className="product-image-link">
        <img src={producto.imagen} alt={producto.nombre} className="product-card-image" />
      </Link>

      <div className="product-card-content">
        <h3>{producto.nombre}</h3>

        <div className="product-card-price">
          <span className="product-price">S/ {producto.precio}</span>

          {producto.precioAnterior > producto.precio && (
            <span className="old-price">S/ {producto.precioAnterior}</span>
          )}
        </div>

        <p className="product-colors">
          {producto.colores.length} colores
        </p>

        <Link to={`/producto/${producto.id}`} className="btn">
          Ver producto
        </Link>
      </div>
    </article>
  );
}