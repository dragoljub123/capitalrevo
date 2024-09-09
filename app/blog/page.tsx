import { Navbar } from "../components/Navbar";
import { BlogPost } from "@/app/utilitis/interface";
import { client } from "@/sanity/lib/client";
import Link from "next/link";

const fetchBlogPosts = async (): Promise<BlogPost[]> => {
  const query = `*[_type == 'blogPost'] {
    title,
    slug {
      current
    },
    description,
    image {
      asset -> {
        url
      },
      alt
    },
    createdDate
  }`;

  return client.fetch(query);
};
export const revalidate = 300;
const Blog = async () => {
  const blogPosts: BlogPost[] = await fetchBlogPosts();

  return (
    <div className="mx-auto">
      <Navbar />
      <div className="pt-20 pb-20 flex justify-center">
        <div className="max-w-sirina mx-auto">
          <h1 className="text-4xl font-bold text-center mt-8">Blog</h1>
          <div className="mt-12 space-y-8">
            {blogPosts.map((post) => (
              <Link
                key={post.slug.current}
                href={`/blog/${post.slug.current}`}
                className=" w-[360px] sm:w-[400px] lg:w-[650px] h-[200px] border rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 flex overflow-hidden"
              >
                {post.image && (
                  <img
                    src={post.image.asset.url}
                    alt={post.image.alt}
                    className="w-1/3 h-full object-cover"
                  />
                )}
                <div className="w-2/3 p-4 flex flex-col justify-between">
                  <div>
                    <h2 className="text-sm md:text-xl font-semibold">
                      {post.title}
                    </h2>
                    <p className="text-xs text-gray-500 mt-1">
                      {new Date(post.createdDate).toLocaleDateString()}
                    </p>
                  </div>
                  <p className="text-gray-600 mt-2 text-xs md:text-sm ">
                    {post.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
