export default function ProductColors({
  colores,
  colorSeleccionado,
  onSelect
}) {
  if (!colores || colores.length === 0) {
    return (
      <div className="product-option">
        <p className="option-title">
          Este producto no tiene colores disponibles.
        </p>
      </div>
    );
  }

  return (
    <div className="product-option">
      <p className="option-title">
        Color: <strong>{colorSeleccionado?.nombre ?? "Selecciona un color"}</strong>
      </p>

      <div className="color-list">
        {colores.map((color) => (
          <button
            type="button"
            key={color.nombre}
            className={`color-option ${
              color.nombre === colorSeleccionado?.nombre ? "active" : ""
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
