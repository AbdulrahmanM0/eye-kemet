import BlogsSection from "@/_ui/blogs/blogs/BlogsSection";
import FilterSection from "@/_ui/blogs/Filter/FilterSection";
import Hero from "@/_ui/blogs/hero/Hero";

export default function Blogs() {
  return (
    <div>
      <Hero />
      <FilterSection />
      <BlogsSection />
    </div>
  );
}
