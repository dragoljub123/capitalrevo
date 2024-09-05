import { Navbar } from "@/app/components/Navbar";
import { BlogPost } from "@/app/utilitis/interface";
import { client } from "@/sanity/lib/client";
import { PortableText } from "@portabletext/react";
import { notFound } from "next/navigation";

interface BlogPostProps {
  params: { slug: string };
}

const fetchBlogPost = async (slug: string): Promise<BlogPost | null> => {
  const query = `*[_type == 'blogPost' && slug.current == $slug][0] {
    title,
    slug {
      current
    },
    description,
    body,
    image {
      asset -> {
        url
      },
      alt
    },
    createdDate
  }`;

  const data = await client.fetch(query, { slug });
  return data || null;
};

const BlogPostPage = async ({ params }: BlogPostProps) => {
  const blogPost = await fetchBlogPost(params.slug);

  if (!blogPost) {
    notFound(); // Handle the case where the blog post is not found
  }

  return (
    <div className="mx-auto">
      <Navbar />
      <div className="pt-20">
        <div className="max-w-sirina mx-auto">
          <h1 className="text-4xl font-bold text-center mt-8">
            {blogPost.title}
          </h1>
          {blogPost.image && (
            <img
              src={blogPost.image.asset.url}
              alt={blogPost.image.alt}
              className="w-full h-auto object-cover mt-4"
            />
          )}
          <div className="mt-8">
            <PortableText value={blogPost.body} />
          </div>
          <p className="text-sm text-gray-500 mt-2">
            Published on: {new Date(blogPost.createdDate).toLocaleDateString()}
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlogPostPage;
