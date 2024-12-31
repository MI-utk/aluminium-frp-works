import { Card } from "@/components/ui/card";
import { BookOpen, Calendar, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { blogPosts } from "@/data/blogPosts";

const Blog = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">Industry Insights</h1>
        <div className="grid grid-cols-1 gap-8">
          {blogPosts.map((post) => (
            <Card key={post.id} className="overflow-hidden bg-white">
              <div className="md:flex">
                <div className="md:w-1/3">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-64 md:h-full object-cover"
                  />
                </div>
                <div className="md:w-2/3 p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-2">
                    <span className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {post.date}
                    </span>
                    <span className="mx-2">•</span>
                    <span className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {post.readTime}
                    </span>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">{post.title}</h2>
                  <p className="text-gray-600 mb-4 line-clamp-3">{post.content}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <span className="text-sm text-gray-500">By {post.author}</span>
                      <span className="mx-2">•</span>
                      <span className="text-sm text-blue-600">{post.category}</span>
                    </div>
                    <Link 
                      to={`/blog/${post.id}`}
                      className="flex items-center text-blue-600 hover:text-blue-700"
                    >
                      <span className="mr-2">Read more</span>
                      <BookOpen className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;