import ProductCard from "./ProductCard";

export default function ProductGrid({ productos }) {
  if (!productos.length) {
    return <p className="empty-message">No hay productos disponibles.</p>;
  }

  return (
    <div className="product-grid">
      {productos.map((producto) => (
        <ProductCard key={producto.id} producto={producto} />
      ))}
    </div>
  );
}