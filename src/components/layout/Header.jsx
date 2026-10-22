import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="site-header">
      <Link to="/" className="logo">M.Sanz</Link>

      <nav className="navbar">
        <Link to="/">Home</Link>
        <Link to="/productos">Productos</Link>
        <a href="/#about">Sobre nosotros</a>
        <a href="/#oferta">Oferta</a>
      </nav>

      <a
        href="https://wa.me/51926588816"
        className="whatsapp-link"
        target="_blank"
        rel="noreferrer"
        aria-label="WhatsApp"
      >
        <span>WhatsApp</span>
      </a>
    </header>
  );
}