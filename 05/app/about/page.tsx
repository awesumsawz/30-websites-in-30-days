import Image from "next/image"

export default function About() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">About the Artist</h1>
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-1/2">
          <Image src="/images/placeholder.svg" alt="Artist portrait" width={400} height={400} className="rounded-lg" />
        </div>
        <div className="md:w-1/2 space-y-4">
          <p>
            Hello, I'm [Artist Name], a passionate Warhammer 40K enthusiast and miniature painter. With over 10 years of
            experience in the hobby, I've honed my skills to bring the grim darkness of the far future to life through
            meticulously painted figurines.
          </p>
          <p>
            My journey began as a casual player, but quickly evolved into a deep appreciation for the artistry behind
            the miniatures. Each piece I create is a labor of love, combining techniques like layering, wet blending,
            and object source lighting to achieve stunning results.
          </p>
          <p>
            Whether you're looking for a centerpiece for your army or a display-worthy collector's item, I pour my heart
            and soul into every brushstroke. Join me in celebrating the rich lore and visual spectacle of Warhammer 40K
            through these unique, hand-painted creations.
          </p>
        </div>
      </div>
    </div>
  )
}

