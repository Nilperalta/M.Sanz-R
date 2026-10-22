import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import ProductGrid from "../components/products/ProductGrid";
import { useProducts } from "../hooks/useProducts";

export default function Products() {
  const { productos, loading } = useProducts();

  return (
    <>
      <Header />

      <main>
        <section className="page-header">
          <div>
            <h1>Zapatillas Mujer</h1>
            <p>Encuentra variedad en tus zapatillas.</p>
          </div>
        </section>

        <section className="products-section">
          {loading ? <p>Cargando productos...</p> : <ProductGrid productos={productos} />}
        </section>
      </main>

      <Footer />
    </>
  );
}