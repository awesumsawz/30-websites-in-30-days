import FigurineCard from "@/components/FigurineCard"

const figurines = [
  { id: 1, name: "Space Marine Captain", price: 89.99, image: "/images/placeholder.svg" },
  { id: 2, name: "Tyranid Hive Tyrant", price: 129.99, image: "/images/placeholder.svg" },
  { id: 3, name: "Necron Overlord", price: 79.99, image: "/images/placeholder.svg" },
  { id: 4, name: "Ork Warboss", price: 99.99, image: "/images/placeholder.svg" },
  { id: 5, name: "Eldar Farseer", price: 69.99, image: "/images/placeholder.svg" },
  { id: 6, name: "Chaos Space Marine", price: 84.99, image: "/images/placeholder.svg" },
]

export default function Listings() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Available Figurines</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {figurines.map((figurine) => (
          <FigurineCard key={figurine.id} figurine={figurine} />
        ))}
      </div>
    </div>
  )
}

