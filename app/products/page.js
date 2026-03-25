import FilterSection from "@/_ui/products/Filter/FilterSection";
import Hero from "@/_ui/products/Hero";
import ProductsSection from "@/_ui/products/products/ProductsSection";
import handleProducts from "@/api/products/Exclusive";

export default async function Products({ searchParams }) {
  const orderBy = searchParams?.order_by || "recommend";
  const price_min = searchParams?.price_min || "";
  const price_max = searchParams?.price_max || "";
  const category_id = searchParams?.attr_sub_category || "";
  const is_featured = searchParams?.is_featured || "";
  const in_stock = searchParams?.in_stock || "";
  const perPage = parseInt(searchParams?.per_page || "1") * 12;
  const deals = await handleProducts(
    {
      order_by: orderBy,
      // limit: "10",
      order: "asc",
      per_page: `eq.${perPage}`,
      is_featured: true,
      price_min,
      price_max,
      category_id,
      is_featured,
      in_stock
    }
  );

  return (
    <div>
      <Hero />
      <FilterSection deals={deals} />
      <ProductsSection deals={deals} />
    </div>
  );
}
