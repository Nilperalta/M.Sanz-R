# ShoesMarket - React

Base inicial del proyecto M.Sanz / ShoesMarket migrado a React + Vite.

## Requisitos

- Node.js instalado
- npm

## Ejecutar

```bash
npm install
npm run dev
```

Después abre la URL que muestre Vite, normalmente:

http://localhost:5173

## Rutas

- `/` Inicio
- `/productos` Productos
- `/producto/1` Detalle de producto
- `/producto/2` Otro detalle
- `/admin/login` Login administrativo (base)
- `/admin` Dashboard administrativo
- `/admin/productos` Gestión de productos (base)
- `/admin/productos/nuevo` Crear producto (base)

## Imágenes

Copia tus imágenes a:

`public/images/`

Actualmente se esperan:

- `zapatilla-M.png`
- `rosa.png`
- `celeste.png`
- `verde.png`

## Arquitectura

La aplicación separa:

- `components`: piezas visuales reutilizables.
- `pages`: páginas completas.
- `hooks`: lógica reutilizable y estado.
- `services`: acceso a datos y autenticación.
- `data`: datos temporales locales.
- `routes`: navegación.

Esto permite reemplazar los datos locales por Supabase o Firebase posteriormente sin rehacer toda la interfaz.

## Próximas etapas

1. Copiar las imágenes reales.
2. Ajustar el diseño para que coincida exactamente con el proyecto original.
3. Completar filtros/categorías.
4. Completar el panel administrativo.
5. Elegir Supabase o Firebase.
6. Conectar base de datos.
7. Conectar almacenamiento de imágenes.
8. Añadir autenticación real para administradora.
9. Añadir CRUD real de productos.
10. Proteger las rutas `/admin`.
