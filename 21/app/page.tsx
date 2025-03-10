import Link from "next/link"
import { posts } from "./data/posts"
import ColorfulPixelLogo from "./components/ColorfulPixelLogo"
import BlinkingCursor from "./components/BlinkingCursor"

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center py-8">
      <ColorfulPixelLogo />
      <h2 className="text-2xl font-pixel mb-6 text-center">
        Retro-Futuristic Web Development <BlinkingCursor />
      </h2>

      <div className="w-full max-w-3xl mx-auto mt-8">
        <h3 className="text-xl font-pixel mb-4 text-dracula-cyan">Latest Blog Posts</h3>
        <div className="grid gap-6">
          {posts.slice(0, 4).map((post) => (
            <Link
              key={post.id}
              href={`/post/${post.id}`}
              className="block p-6 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors pixelated-border"
            >
              <h3 className="text-xl font-pixel mb-2">{post.title}</h3>
              <p className="font-mono text-sm mb-2">{post.content.slice(0, 100)}...</p>
              <span className="inline-block px-2 py-1 bg-green-600 text-black text-sm font-mono rounded">
                {post.category}
              </span>
            </Link>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/category/tech"
            className="inline-block px-4 py-2 bg-dracula-purple text-white font-pixel rounded-md hover:bg-dracula-pink transition-colors mx-2"
          >
            Tech Posts
          </Link>
          <Link
            href="/category/art"
            className="inline-block px-4 py-2 bg-dracula-cyan text-black font-pixel rounded-md hover:bg-dracula-green transition-colors mx-2"
          >
            Art Posts
          </Link>
          <Link
            href="/category/finance"
            className="inline-block px-4 py-2 bg-dracula-orange text-black font-pixel rounded-md hover:bg-dracula-yellow transition-colors mx-2"
          >
            Finance Posts
          </Link>
        </div>
      </div>
    </div>
  )
}

