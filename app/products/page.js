import FilterSection from "@/_ui/products/Filter/FilterSection";
import Hero from "@/_ui/products/Hero";
import ProductsSection from "@/_ui/products/products/ProductsSection";
import handleProducts from "@/api/products/Exclusive";

export default async function Products({ searchParams }) {
  const orderBy = searchParams?.order_by || "recommend";
  const perPage = parseInt(searchParams?.per_page || "1") * 12;
  const deals = await handleProducts(
    {
      order_by: orderBy,
      // limit: "10",
      order: "asc",
      per_page: `eq.${perPage}`,
      is_featured: true
    }
  );

  return (
    <div>
      <Hero />
      <FilterSection deals={deals}/>
      <ProductsSection deals={deals} />
    </div>
  );
}
