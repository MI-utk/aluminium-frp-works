import { BlogPost } from "./types/BlogPost";
import { technicalPosts } from "./blog/technicalPosts";
import { industryPosts } from "./blog/industryPosts";
import { sustainabilityPosts } from "./blog/sustainabilityPosts";
import { companyPosts } from "./blog/companyPosts";

export const blogPosts: BlogPost[] = [
  ...technicalPosts,
  ...industryPosts,
  ...sustainabilityPosts,
  ...companyPosts,
];