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
    <div className="mx-auto bg-gray-100">
      <Navbar />
      <div className="pt-20 pb-20 px-4 lg:px-8">
        <div className="max-w-screen-xl mx-auto bg-white p-10 rounded-lg shadow-lg">
          <h1 className="text-xl md:text-2xl lg:text-4xl font-extrabold text-center mb-6">
            {blogPost.title}
          </h1>
          <div className="flex justify-center mb-8">
            {blogPost.image && (
              <img
                src={blogPost.image.asset.url}
                alt={blogPost.image.alt}
                className="w-4/5 max-w-2xl h-auto object-cover rounded-lg shadow-md"
              />
            )}
          </div>
          <div className="prose lg:prose-xl mx-auto mb-8 custom-prose">
            <PortableText value={blogPost.body} />
          </div>
          <p className="text-sm text-gray-500 text-center mt-4">
            Published on: {new Date(blogPost.createdDate).toLocaleDateString()}
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlogPostPage;
