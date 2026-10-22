import { useEffect, useState } from "react";
import { getProducts, getProductById, getRelatedProducts, deleteProduct } from "../services/productService";

export function useProducts() {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProducts().then((data) => {
      setProductos(data);
      setLoading(false);
    });
  }, []);

  async function removeProduct(id) {
    
    const eliminado = await deleteProduct(id);

    if (!eliminado) return; 

    setProductos(
      productos.filter((producto) => producto.id !== Number(id))
    );
  }

  return { productos, loading, removeProduct };
}

//Producto individual
export function useProduct(id) {
  const [producto, setProducto] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProductById(id).then((data) => {
      setProducto(data ?? null);
      setLoading(false);
    });
  }, [id]);

  return { producto, loading };
}

//Productos relacionados
export function useRelatedProducts(producto) {
  const [relacionados, setRelacionados] = useState([]);

  useEffect(() => {
    if (!producto) return;
    
    getRelatedProducts(producto).then(setRelacionados);
  }, [producto]);

  return relacionados;
}