import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {createProduct, getProductById, updateProduct} from "../../services/productService";

export default function AdminProductForm() {
  const { id } = useParams();
  const editando = Boolean(id);
  const [nombre, setNombre] = useState("");
  const [precio, setPrecio] = useState("");
  const [descripcion, setDescripcion] = useState("");

  useEffect(() => {
    
    if (!id) return;

    getProductById(id).then((producto) => {
      setNombre(producto.nombre);
      setPrecio(producto.precio);
      setDescripcion(producto.descripcion);
      console.log("Producto encontrado:", producto);
    });

  }, [id]);


async function handleSubmit(event) {
    event.preventDefault();
    
    const producto ={
      nombre,
      precio,
      descripcion
    }

    if (editando) {
      const resultado = await updateProduct(id, producto);
      console.log("Producto actualizado:", resultado);
    } else {
      const resultado = await createProduct(producto);
      console.log("Producto creado:", resultado);
    }
    
  }

  return (
    <main className="admin-page">
      <div className="admin-card admin-wide">
        <p className="eyebrow">PRODUCTO</p>
        <h1>{editando ? "Editar producto" : "Nuevo producto"}</h1>

        {/* 
          Este formulario es intencionalmente una base.
          En la siguiente etapa conectaremos:
          - creación/edición real
          - subida de imágenes
          - colores
          - tallas
          - Supabase/Firebase
        */}

        <form onSubmit={handleSubmit} className="admin-form" >
          <label>
            Nombre
            <input
              value={nombre}
              onChange={(event) => setNombre(event.target.value)}
              placeholder="Ej. Nike Air Max"
            />
          </label>

          <label> 
            Precio
            <input
              type="number"
              value={precio}
              onChange={(event) => setPrecio(event.target.value)}
              placeholder="250"
            />
          </label>

          <label>
            Descripción
            <textarea 
              rows="5" 
              placeholder="Descripción del producto..." 
              value={descripcion}
              onChange={(event)=> setDescripcion(event.target.value)}
            />
          </label>

          <button type="submit" className="btn">
            Guardar (próximamente)
          </button>
        </form>
      </div>
    </main>
  );
}