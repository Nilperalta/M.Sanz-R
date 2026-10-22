export default function ProductSizes({
  tallas,
  tallaSeleccionada,
  onSelect
}) {
  return (
    <div className="product-option">
      <p className="option-title">Talla</p>

      <div className="size-list">
        {tallas.map((talla) => (
          <button
            type="button"
            key={talla}
            className={`size-option ${
              talla === tallaSeleccionada ? "active" : ""
            }`}
            onClick={() => onSelect(talla)}
          >
            {talla}
          </button>
        ))}
      </div>
    </div>
  );
}