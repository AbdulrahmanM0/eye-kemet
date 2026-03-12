import FilterSection from "@/_ui/testmonials/Filter/FilterSection";
import Hero from "@/_ui/testmonials/hero/Hero";
import Review from "@/_ui/testmonials/review/Review";
import TestmonialsSection from "@/_ui/testmonials/testmonials/Testmonials";

export default function Blogs() {
  return (
    <div>
      <Hero />
      <FilterSection />
      <TestmonialsSection />
      <Review />
    </div>
  );
}
