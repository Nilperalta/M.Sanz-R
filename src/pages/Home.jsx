import { Link } from "react-router-dom";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import ProductGrid from "../components/products/ProductGrid";
import { useProducts } from "../hooks/useProducts";

export default function Home() {
  const { productos, loading } = useProducts();

  return (
    <>
      <Header />

      <main>
        <section className="hero">
          <div>
            <p className="eyebrow">SHOESMARKET</p>
            <h1>Encuentra tus próximos zapatos favoritos.</h1>
            <p>
              Calzado moderno para acompañarte todos los días.
            </p>
            <Link to="/productos" className="btn">
              Ver productos 
            </Link>
          </div>
        </section>

        <section className="home-section">
          <div className="section-heading">
            <h2>Lo nuevo</h2>
            <p>Una pequeña selección para comenzar el proyecto.</p>
          </div>

          {loading ? <p>Cargando productos...</p> : <ProductGrid productos={productos} />}
        </section>

        <section id="about" className="home-section simple-section">
          <h2>Sobre nosotros</h2>
          <p>
            M.Sanz es una tienda de zapatos enfocada en ofrecer productos
            modernos y una experiencia de compra sencilla.
          </p>
        </section>

        <section id="oferta" className="home-section simple-section">
          <h2>Ofertas</h2>
          <p>Esta sección queda preparada para productos en oferta.</p>
        </section>
      </main>

      <Footer />
    </>
  );
}