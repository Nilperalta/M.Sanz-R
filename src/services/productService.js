import { productos } from "../data/products";
import { supabase } from "../lib/supabase";

// Esta capa separa los componentes de la fuente de datos.
// Hoy usamos datos locales; mañana puede consultar Supabase/Firebase.

//Leer productos
export async function getProducts() {
  const { data, error } = await supabase
    .from("products")
    .select(`
      id,
      nombre,
      precio,
      precio_anterior,
      categoria_id,
      descripcion,
      imagen,
      product_colors (
        imagen,
        colors (
          nombre
        )
      ),
      product_sizes (
        sizes (
          talla
        )
      )
    `);

  if (error) {
    console.error("Error al obtener productos:", error);
    return [];
  }

  const productosAdaptados = data.map((producto) => ({
    id: producto.id,
    nombre: producto.nombre,
    precio: Number(producto.precio),
    precioAnterior: Number(producto.precio_anterior ?? 0),
    imagen: producto.imagen,
    descripcion: producto.descripcion,

    colores: (producto.product_colors ?? []).map((item) => ({
      nombre: item.colors.nombre,
      imagen: item.imagen
    })),

    tallas: (producto.product_sizes ?? []).map(
      (item) => item.sizes.talla
    )
  }));

  return productosAdaptados;
}



//crear producto
export async function createProduct(producto) {
  const nuevoId = productos.length + 1;

  const nuevoProducto = {
    id: nuevoId,
    ...producto
  };

  productos.push(nuevoProducto);

  return nuevoProducto;
}

//Editar producto
export async function updateProduct(id, producto) {

    const index = productos.findIndex(
      (producto) => producto.id === Number(id)
    );

    //Si el producto no existe
    if (index === -1) {
      return null;
    }

    productos[index] = {
      id: Number(id),
      ...producto
    };

    return productos[index];
}


//delete producto
export async function deleteProduct(id) {

  const index = productos.findIndex(
    (producto) => producto.id === Number(id)
  );

  //Si el producto no existe
  if (index === -1) {
    return null;
  }

  productos.splice(index, 1);

  return true;
}

//Obtener un producto por su id
export async function getProductById(id) {
  const { data, error } = await supabase
    .from("products")
    .select(`
      id,
      nombre,
      precio,
      precio_anterior,
      categoria_id,
      descripcion,
      imagen,
      product_colors (
        imagen,
        colors (
          nombre
        )
      ),
      product_sizes (
        sizes (
          talla
        )
      )
    `)
    .eq("id", id)
    .single();

  if (error) {
    console.error("Error al obtener el producto:", error);
    return null;
  }

  const productoAdaptado = {
    id: data.id,
    nombre: data.nombre,
    precio: Number(data.precio),
    precioAnterior: Number(data.precio_anterior ?? 0),
    imagen: data.imagen,
    descripcion: data.descripcion,
    categoria_id: data.categoria_id,

    colores: (data.product_colors ?? []).map((item) => ({
      nombre: item.colors.nombre,
      imagen: item.imagen,
    })),

    tallas: (data.product_sizes ?? []).map(
      (item) => item.sizes.talla
    ),
  };

  return productoAdaptado;
}


//Obtener productos relacionados
export async function getRelatedProducts(producto) {
  const { data, error } = await supabase
    .from("products")
    .select("*")
    .eq("categoria_id", producto.categoria_id)
    .neq("id", producto.id);

  if (error) {
    console.error("Error al obtener productos relacionados:", error);
    return [];
  }

  return data.map((item) => ({
    id: item.id,
    nombre: item.nombre,
    precio: Number(item.precio),
    precioAnterior: Number(item.precio_anterior ?? 0),
    imagen: item.imagen,
    descripcion: item.descripcion,
    categoria_id: item.categoria_id,
    colores: [],
    tallas: [],
  }));
}

