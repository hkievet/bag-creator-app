function ColorPicker({ colors, selectedColor, onColorChange }) {
  const colorElements = Object.keys(colors).map(key => (
    <div
      key={key}
      className={"color-choice " + (selectedColor === key ? "selected" : "")}
      style={{
        backgroundColor: colors[key]
      }}
    />
  ));

  return <div className="colors">{colorElements}</div>;
}

function ImageCoverOverlay({ image, color }) {
  return (
    <div>
      <img src={image.src} className="image-overlay" alt={image.name} />
    </div>
  );
}

function FabricPicker({ colors, render, fabric, onFabricUpate }) {
  function onColorChange() {
    render();
  }
  return (
    <div>
      <ColorPicker colors={colors} onColorChange={onColorChange} />
      <ImageCoverOverlay image={images.fabrics.cotton} />
    </div>
  );
}
