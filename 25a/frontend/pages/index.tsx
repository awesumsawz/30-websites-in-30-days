import { GetStaticProps } from 'next';
import Link from 'next/link';
import parse from 'html-react-parser';
import { getAllPosts, Post } from '../lib/api';

interface HomeProps {
  posts: Post[];
}

export default function Home({ posts }: HomeProps) {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Latest Posts</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map(post => (
          <div key={post.id} className="border rounded-lg overflow-hidden shadow-md">
            {post._embedded && post._embedded['wp:featuredmedia'] && post._embedded['wp:featuredmedia'][0] && (
              <div className="aspect-video relative">
                <img 
                  src={post._embedded['wp:featuredmedia'][0].source_url} 
                  alt={post.title.rendered}
                  className="w-full h-full object-cover"
                />
              </div>
            )}
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">
                {parse(post.title.rendered)}
              </h2>
              <div className="text-gray-600 mb-4">
                {parse(post.excerpt.rendered)}
              </div>
              <Link href={`/posts/${post.slug}`} className="text-blue-600 hover:underline">
                Read More
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = await getAllPosts();
  
  return {
    props: {
      posts,
    },
    revalidate: 60, // Revalidate every 60 seconds
  };
} 