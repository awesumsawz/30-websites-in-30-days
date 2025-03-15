import { GetStaticProps, GetStaticPaths } from 'next';
import Link from 'next/link';
import parse from 'html-react-parser';
import { getAllPosts, getPostBySlug, Post } from '../../lib/api';

interface PostProps {
  post: Post;
}

export default function PostPage({ post }: PostProps) {
  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Link href="/" className="text-blue-600 hover:underline mb-4 inline-block">
        ← Back to Home
      </Link>
      
      <article className="prose lg:prose-xl mx-auto">
        <h1>{parse(post.title.rendered)}</h1>
        
        <div className="mb-4 text-gray-600">
          {new Date(post.date).toLocaleDateString()}
        </div>
        
        {post._embedded && post._embedded['wp:featuredmedia'] && post._embedded['wp:featuredmedia'][0] && (
          <div className="mb-6">
            <img 
              src={post._embedded['wp:featuredmedia'][0].source_url}
              alt={post.title.rendered}
              className="w-full h-auto rounded-lg"
            />
          </div>
        )}
        
        <div className="mt-6">
          {parse(post.content.rendered)}
        </div>
      </article>
    </div>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await getAllPosts();
  
  const paths = posts.map((post) => ({
    params: { slug: post.slug },
  }));

  return {
    paths,
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug as string;
  const post = await getPostBySlug(slug);
  
  if (!post) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      post,
    },
    revalidate: 60, // Revalidate every 60 seconds
  };
}; 