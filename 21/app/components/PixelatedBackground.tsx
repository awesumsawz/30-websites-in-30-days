const PixelatedBackground = () => {
  return (
    <div className="fixed inset-0 z-0 opacity-10">
      <div className="absolute inset-0 bg-grid-pattern bg-grid-8 [mask-image:linear-gradient(to_bottom,white,transparent)]" />
    </div>
  )
}

export default PixelatedBackground

