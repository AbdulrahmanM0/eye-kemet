import BlogsSection from "@/_ui/blogs/blogs/BlogsSection";
import FilterSection from "@/_ui/blogs/Filter/FilterSection";
import Hero from "@/_ui/blogs/hero/Hero";
import handleBlogs from "@/api/blogs/blogs";

export default async function Blogs() {
  const blogs = await handleBlogs();
  return (
    <div>
      <Hero />
      {/* <FilterSection /> */}
      <BlogsSection blogsData={blogs}/>
    </div>
  );
}
