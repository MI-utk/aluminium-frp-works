import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { blogPosts } from "@/data/blogPosts";

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
              <CarouselItem key={post.id} className="pl-4 md:basis-[calc(28.5%-1rem)] basis-[66.666%]">
                <Link to={`/blog/${post.id}`} className="block h-full">
                  <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow h-full flex flex-col">
                    <div className="relative aspect-[16/9]">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-6 flex flex-col flex-grow">
                      <h3 className="text-xl font-bold mb-3 line-clamp-2 flex-shrink-0">
                        {post.title}
                      </h3>
                      <p className="text-gray-600 mb-4 line-clamp-3 flex-grow">
                        {post.excerpt}
                      </p>
                      <div className="flex justify-between items-center text-sm mt-auto">
                        <span className="text-gray-500">BLOG</span>
                        <span className="text-2xl font-bold">{post.date.split("-")[2]}.{post.date.split("-")[1]}</span>
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