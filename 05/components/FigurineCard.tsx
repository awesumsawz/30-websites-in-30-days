import Image from "next/image"

interface Figurine {
  id: number
  name: string
  price: number
  image: string
}

export default function FigurineCard({ figurine }: { figurine: Figurine }) {
  return (
    <div className="bg-surface0 rounded-lg overflow-hidden shadow-lg">
      <Image
        src={figurine.image || "/images/placeholder.svg"}
        alt={figurine.name}
        width={300}
        height={300}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">{figurine.name}</h3>
        <p className="text-primary font-bold">${figurine.price.toFixed(2)}</p>
        <button className="mt-4 bg-primary text-base px-4 py-2 rounded hover:bg-primary/80 transition-colors">
          Add to Cart
        </button>
      </div>
    </div>
  )
}

