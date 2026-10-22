// Datos locales temporales.
// Más adelante esta información será reemplazada por Supabase o Firebase.
export const productos = [
  {
    id: 1,
    nombre: "Nike Air Max",
    precio: 250,
    precioAnterior: 320,
    tallas: [36, 37, 38, 39, 40],
    colores: [
      { nombre: "Rosado", imagen: "/images/rosa.png" },
      { nombre: "Celeste", imagen: "/images/celeste.png" },
      { nombre: "Verde", imagen: "/images/verde.png" }
    ],
    categoria: "zapatillas-mujer",
    imagen: "/images/zapatilla-M.png",
    descripcion:
      "Zapatilla deportiva con diseño moderno, cómoda para uso diario y confeccionada con materiales de alta calidad."
  },
  {
    id: 2,
    nombre: "Adidas Forum",
    precio: 320,
    precioAnterior: 320,
    tallas: [39, 40, 41, 42],
    colores: [
      { nombre: "Rosado", imagen: "/images/rosa.png" },
      { nombre: "Celeste", imagen: "/images/celeste.png" },
      { nombre: "Verde", imagen: "/images/verde.png" }
    ],
    categoria: "zapatillas-mujer",
    imagen: "/images/zapatilla-M.png",
    descripcion:
      "Zapatilla deportiva con diseño moderno, cómoda para uso diario y confeccionada con materiales de alta calidad."
  }
];