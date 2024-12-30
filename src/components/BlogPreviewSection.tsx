import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { BookOpen } from "lucide-react";

const blogPosts = [
  {
    id: 1,
    title: "Innovation in Aluminum Manufacturing",
    excerpt: "Discover the latest technological advancements in aluminum manufacturing and how they're shaping the industry's future.",
    date: "2024-03-15",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1590959651373-a3db0f38a961?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    title: "Sustainability in Metal Production",
    excerpt: "Learn about our commitment to sustainable manufacturing practices and environmental responsibility.",
    date: "2024-03-10",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    title: "Quality Control in Aluminum Processing",
    excerpt: "An inside look at our rigorous quality control processes ensuring premium aluminum products.",
    date: "2024-03-05",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1584727638096-042c45049ebe?auto=format&fit=crop&w=800&q=80",
  },
];

export const BlogPreviewSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Latest Insights</h2>
          <p className="text-xl text-gray-600">Stay updated with industry news and innovations</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Link to={`/blog/${post.id}`} key={post.id}>
              <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-2">
                    <span>{post.date}</span>
                    <span className="mx-2">•</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{post.title}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">{post.excerpt}</p>
                  <div className="flex items-center text-blue-600">
                    <span className="mr-2">Read more</span>
                    <BookOpen className="h-4 w-4" />
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};