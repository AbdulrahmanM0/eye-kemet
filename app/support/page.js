import FilterSection from "@/_ui/support/filter/FilterSection";
import HelpSection from "@/_ui/support/help/HelpSection";
import Hero from "@/_ui/support/hero/Hero";
import handleFaq from "@/api/faq/faq";


export default async function FAQ() {
  const faq = await handleFaq();
  console.log("faq",faq)
  return (
    <div>
      <Hero />
      {/* <FilterSection /> */}
      <HelpSection faq={faq}/>
    </div>
  );
}
