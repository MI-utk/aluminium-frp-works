import { wireRodPosts } from './wireRodPosts';
import { flatRolledPosts } from './flatRolledPosts';
import { sustainabilityPosts } from './sustainabilityPosts';
import { foilPosts } from './foilPosts';

export const blogPosts = [
  ...wireRodPosts,
  ...flatRolledPosts,
  ...sustainabilityPosts,
  ...foilPosts
].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());