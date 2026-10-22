import ProductGrid from "./ProductGrid";

export default function RelatedProducts({ productos }) {
  if (!productos.length) return null;

  return (
    <section className="related-products">
      <div className="section-heading">
        <h2>Te puede interesar</h2>
        <p>Otros productos que podrían gustarte.</p>
      </div>

      <ProductGrid productos={productos} />
    </section>
  );
}