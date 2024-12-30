import { Card } from "@/components/ui/card";
import { BookOpen, Calendar, Clock } from "lucide-react";

const blogPosts = [
  {
    id: 1,
    title: "Innovation in Aluminum Manufacturing",
    content: `
      The aluminum manufacturing industry is experiencing a revolutionary transformation through technological advancement. 
      Modern manufacturing processes are becoming increasingly automated and efficient, leading to higher quality products 
      and more sustainable production methods.

      Key innovations include:
      - Advanced automation systems
      - Precision control mechanisms
      - Energy-efficient processing
      - Smart quality control systems
    `,
    date: "2024-03-15",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1590959651373-a3db0f38a961?auto=format&fit=crop&w=800&q=80",
    author: "John Smith",
    category: "Technology"
  },
  {
    id: 2,
    title: "Sustainability in Metal Production",
    content: `
      Sustainable manufacturing is no longer just a trend but a necessity. Our commitment to environmental 
      responsibility drives us to implement eco-friendly practices throughout our production process.

      Our sustainable practices include:
      - Recycling and waste reduction
      - Energy-efficient equipment
      - Water conservation methods
      - Responsible sourcing
    `,
    date: "2024-03-10",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?auto=format&fit=crop&w=800&q=80",
    author: "Sarah Johnson",
    category: "Sustainability"
  },
  {
    id: 3,
    title: "Quality Control in Aluminum Processing",
    content: `
      Quality control is at the heart of our manufacturing process. Every step of production undergoes 
      rigorous testing and inspection to ensure our products meet the highest industry standards.

      Our quality control process includes:
      - Advanced testing equipment
      - Regular quality audits
      - Comprehensive staff training
      - Documentation and tracking
    `,
    date: "2024-03-05",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1584727638096-042c45049ebe?auto=format&fit=crop&w=800&q=80",
    author: "Michael Brown",
    category: "Quality Assurance"
  },
];

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
                    <button className="flex items-center text-blue-600 hover:text-blue-700">
                      <span className="mr-2">Read more</span>
                      <BookOpen className="h-4 w-4" />
                    </button>
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