import { GetStaticProps } from 'next';
import Head from 'next/head';
import parse from 'html-react-parser';
import { getPageBySlug, Page } from '../lib/api';

interface HomeProps {
  page: Page | null;
}

export default function Home({ page }: HomeProps) {
  if (!page) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">Page Not Found</h1>
        <p>The home page could not be loaded. Please ensure a page with the slug "home" exists in WordPress.</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Head>
        <title>{parse(page.title.rendered)}</title>
        <meta name="description" content="Headless WordPress with Next.js" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="text-4xl font-bold mb-8">{parse(page.title.rendered)}</h1>
        <div className="prose max-w-none">
          {parse(page.content.rendered)}
        </div>
      </main>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const page = await getPageBySlug('home');
  
  return {
    props: {
      page,
    },
    revalidate: 60, // Revalidate every 60 seconds
  };
} 