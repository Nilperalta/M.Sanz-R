import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import ProductColors from "../components/products/ProductColors";
import ProductSizes from "../components/products/ProductSizes";
import RelatedProducts from "../components/products/RelatedProducts";
import { useProduct, useRelatedProducts } from "../hooks/useProducts";

const WHATSAPP_NUMBER = "51926588816";

export default function ProductDetail() {
  const { id } = useParams();
  const { producto, loading } = useProduct(id);

  const relacionados = useRelatedProducts(producto);

  const [colorSeleccionado, setColorSeleccionado] = useState(null);
  const [tallaSeleccionada, setTallaSeleccionada] = useState(null);

  if (loading) {
    return (
      <>
        <Header />
        <main className="state-page">Cargando producto...</main>
        <Footer />
      </>
    );
  }

  if (!producto) {
    return (
      <>
        <Header />
        <main className="state-page">
          <h1>Producto no encontrado</h1>
          <Link to="/productos" className="btn">Volver a productos</Link>
        </main>
        <Footer />
      </>
    );
  }

  // Inicializamos el color una sola vez cuando ya conocemos el producto.
  const colorActual = colorSeleccionado ?? producto.colores[0];

  function comprarPorWhatsApp() {
    if (!tallaSeleccionada) {
      alert("Selecciona una talla.");
      return;
    }

    const mensaje = [
      "Hola, quiero pedir este producto:",
      "",
      `*${producto.nombre}*`,
      `Color: ${colorActual.nombre}`,
      `Talla: ${tallaSeleccionada}`,
      `Precio: S/ ${producto.precio}`
    ].join("\n");

    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(mensaje)}`,
      "_blank",
      "noopener,noreferrer"
    );
  }

  return (
    <>
      <Header />

      <main>
        <section className="product-detail">
          <div className="product-detail-image">
            <img src={colorActual.imagen} alt={producto.nombre} />
          </div>

          <div className="product-detail-info">
            <p className="eyebrow">{producto.categoria}</p>

            <h1>{producto.nombre}</h1>

            <div className="detail-price">
              <span className="product-price">S/ {producto.precio}</span>

              {producto.precioAnterior > producto.precio && (
                <span className="old-price">
                  S/ {producto.precioAnterior}
                </span>
              )}
            </div>

            <ProductColors
              colores={producto.colores}
              colorSeleccionado={colorActual}
              onSelect={setColorSeleccionado}
            />

            <ProductSizes
              tallas={producto.tallas}
              tallaSeleccionada={tallaSeleccionada}
              onSelect={setTallaSeleccionada}
            />

            <div className="detail-description">
              <h2>Descripción</h2>
              <p>{producto.descripcion}</p>
            </div>

            <button type="button" className="btn whatsapp-button" onClick={comprarPorWhatsApp}>
              Comprar por WhatsApp
            </button>
          </div>
        </section>

        <RelatedProducts productos={relacionados} />
      </main>

      <Footer />
    </>
  );
}