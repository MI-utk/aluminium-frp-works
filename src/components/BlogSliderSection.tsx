import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const blogPosts = [
  {
    id: 1,
    title: "Innovation in Aluminum Manufacturing",
    excerpt: "One of the leading aluminum manufacturing companies reports significant advancements in production techniques...",
    date: "06.02",
    category: "PRESS",
    image: "https://images.unsplash.com/photo-1590959651373-a3db0f38a961?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    title: "Sustainability Report Released",
    excerpt: "Our commitment to environmental responsibility leads to groundbreaking sustainable manufacturing practices...",
    date: "05.02",
    category: "COMPANY",
    image: "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    title: "National Credit Rating Achievement",
    excerpt: "Masters India receives top-tier credit rating, reflecting strong financial performance and market position...",
    date: "03.02",
    category: "PRESS",
    image: "https://images.unsplash.com/photo-1584727638096-042c45049ebe?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 4,
    title: "New Manufacturing Facility",
    excerpt: "Expansion of our production capacity with state-of-the-art manufacturing facility in Gujarat...",
    date: "02.02",
    category: "COMPANY",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 5,
    title: "Industry Leadership Award",
    excerpt: "Masters India recognized for excellence in aluminum manufacturing and industry innovation...",
    date: "01.02",
    category: "PRESS",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 6,
    title: "Global Market Expansion",
    excerpt: "Strategic initiatives to expand our presence in international markets showing positive results...",
    date: "31.01",
    category: "COMPANY",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 7,
    title: "R&D Breakthrough",
    excerpt: "Research team achieves breakthrough in aluminum alloy development for aerospace applications...",
    date: "30.01",
    category: "PRESS",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80",
  },
];

export const BlogSliderSection = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-12">
          <div>
            <h2 className="text-4xl font-bold">Latest from Blog</h2>
          </div>
          <Link
            to="/blog"
            className="flex items-center text-blue-600 hover:text-blue-700 transition-colors"
          >
            READ MORE <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
            slidesToScroll: 1,
          }}
          className="w-full relative"
        >
          <CarouselContent className="-ml-4">
            {blogPosts.map((post) => (
              <CarouselItem key={post.id} className="pl-4 basis-[calc(28.5%-1rem)]">
                <Link to={`/blog/${post.id}`}>
                  <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-2 line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-gray-600 mb-4 line-clamp-2">
                        {post.excerpt}
                      </p>
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-gray-500">{post.category}</span>
                        <span className="text-2xl font-bold">{post.date}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="absolute -left-12 right-auto top-1/2 transform -translate-y-1/2">
            <CarouselPrevious className="relative left-0 bg-white border-primary text-primary hover:bg-primary hover:text-white" />
          </div>
          <div className="absolute -right-12 left-auto top-1/2 transform -translate-y-1/2">
            <CarouselNext className="relative right-0 bg-white border-primary text-primary hover:bg-primary hover:text-white" />
          </div>
        </Carousel>
      </div>
    </section>
  );
};