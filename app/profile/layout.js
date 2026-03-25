import FilterSection from "@/_ui/profile/Filter/FilterSection";
import Hero from "@/_ui/profile/hero/Hero";
import handleProfile from "@/api/proflie/Profile";

export default async function RootLayout({ children, params }) {
  const profile = await handleProfile();

  return (
    <>
      <Hero profile={profile?.customer} />
      <FilterSection params={params} />
      <section >
        <div className="py-clamp-100 w-[clamp(320px,90vw,1258px)] xl:w-[clamp(320px,65.5vw,1258px)] mx-auto">
          {children}
        </div>
      </section>
    </>
  );
}
