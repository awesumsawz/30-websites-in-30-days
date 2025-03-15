import axios from 'axios';

const API_URL = process.env.WORDPRESS_API_URL || 'http://wordpress/wp-json';

// Types
export interface Post {
  id: number;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
  };
  excerpt: {
    rendered: string;
  };
  date: string;
  slug: string;
  featured_media: number;
  _embedded?: {
    'wp:featuredmedia'?: Array<{
      source_url: string;
    }>;
  };
}

export interface Page {
  id: number;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
  };
  slug: string;
}

// Fetch all posts
export async function getAllPosts(): Promise<Post[]> {
  try {
    const response = await axios.get(`${API_URL}/wp/v2/posts?_embed`);
    return response.data;
  } catch (error) {
    console.error('Error fetching posts:', error);
    return [];
  }
}

// Fetch post by slug
export async function getPostBySlug(slug: string): Promise<Post | null> {
  try {
    const response = await axios.get(`${API_URL}/wp/v2/posts?slug=${slug}&_embed`);
    return response.data.length > 0 ? response.data[0] : null;
  } catch (error) {
    console.error(`Error fetching post with slug ${slug}:`, error);
    return null;
  }
}

// Fetch all pages
export async function getAllPages(): Promise<Page[]> {
  try {
    const response = await axios.get(`${API_URL}/wp/v2/pages`);
    return response.data;
  } catch (error) {
    console.error('Error fetching pages:', error);
    return [];
  }
}

// Fetch page by slug
export async function getPageBySlug(slug: string): Promise<Page | null> {
  try {
    const response = await axios.get(`${API_URL}/wp/v2/pages?slug=${slug}`);
    return response.data.length > 0 ? response.data[0] : null;
  } catch (error) {
    console.error(`Error fetching page with slug ${slug}:`, error);
    return null;
  }
} 