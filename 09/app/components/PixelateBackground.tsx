const PixelateBackground = () => {
  return (
    <div className="pixelateBackground fixed inset-0 z-0 opacity-10">
      <div className="pixelate-grid absolute inset-0 bg-grid-pattern bg-grid-8 [mask-image:linear-gradient(to_bottom,white,transparent)]" />
    </div>
  );
};

export default PixelateBackground;
