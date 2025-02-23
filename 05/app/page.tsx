import Image from "next/image"
import Link from "next/link"

export default function Home() {
  return (
    <div className="space-y-8">
      <section className="text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to Warhammer 40K Figurine Art</h1>
        <p className="text-xl">Discover unique, hand-painted figurines for your collection</p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex-col gap-4">
          <h2 className="text-2xl font-semibold mb-4">Featured Artwork</h2>
          <a href="/details">
            <div className="space-y-4">
              <Image
                src="/images/placeholder.svg"
                alt="Featured Warhammer 40K figurine"
                width={500}
                height={300}
                className="rounded-lg"
              />
              <p>Hand-painted Space Marine Captain</p>
            </div>
          </a>
        </div>
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Latest Creation</h2>
          <Image
            src="/images/placeholder.svg"
            alt="Latest Warhammer 40K figurine"
            width={500}
            height={300}
            className="rounded-lg"
          />
          <p>Custom Tyranid Hive Tyrant</p>
        </div>
      </section>

      <section className="text-center">
        <Link href="/listings" className="btn btn-primary ">
          View All Figurines
        </Link>
      </section>
    </div>
  )
}

