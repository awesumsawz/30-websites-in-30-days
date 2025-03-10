import { notFound } from "next/navigation"
import CommentSection from "../../components/CommentSection"
import SocialShare from "../../components/SocialShare"
import { posts } from "../../data/posts"
import Link from "next/link"

export default function Post({ params }: { params: { id: string } }) {
  const post = posts.find((p) => p.id === Number.parseInt(params.id))

  if (!post) {
    notFound()
  }

  // Find related posts with the same category
  const relatedPosts = posts.filter((p) => p.category === post.category && p.id !== post.id).slice(0, 3)

  return (
    <div className="max-w-3xl mx-auto">
      <article className="prose prose-invert prose-green max-w-none mb-8">
        <h1 className="font-pixel">{post.title}</h1>
        <span className="inline-block px-2 py-1 bg-green-600 text-black text-sm font-mono rounded mb-4">
          {post.category}
        </span>
        <div className="font-mono text-lg leading-relaxed">{post.content}</div>
        <SocialShare url={`https://yourdomain.com/post/${post.id}`} title={post.title} />
      </article>

      {relatedPosts.length > 0 && (
        <div className="mb-8">
          <h3 className="text-xl font-pixel mb-4 text-dracula-cyan">Related Posts</h3>
          <div className="grid gap-4">
            {relatedPosts.map((relatedPost) => (
              <Link
                key={relatedPost.id}
                href={`/post/${relatedPost.id}`}
                className="block p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
              >
                <h4 className="text-lg font-pixel mb-1">{relatedPost.title}</h4>
                <p className="font-mono text-sm">{relatedPost.content.slice(0, 80)}...</p>
              </Link>
            ))}
          </div>
        </div>
      )}

      <CommentSection />
    </div>
  )
}

