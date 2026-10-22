export default function ProductColors({
  colores,
  colorSeleccionado,
  onSelect
}) {
  return (
    <div className="product-option">
      <p className="option-title">
        Color: <strong>{colorSeleccionado.nombre}</strong>
      </p>

      <div className="color-list">
        {colores.map((color) => (
          <button
            type="button"
            key={color.nombre}
            className={`color-option ${
              color.nombre === colorSeleccionado.nombre ? "active" : ""
            }`}
            onClick={() => onSelect(color)}
            aria-label={`Seleccionar color ${color.nombre}`}
          >
            <img src={color.imagen} alt={color.nombre} />
          </button>
        ))}
      </div>
    </div>
  );
}