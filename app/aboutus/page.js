import Commission from "@/_ui/aboutus/commission/Commission";
import Hero from "@/_ui/aboutus/hero/Hero";
import Mission from "@/_ui/aboutus/mission/Missiom";
import Navigation from "@/_ui/aboutus/navigation/Navigation";
import Story from "@/_ui/aboutus/story/Story";
import Values from "@/_ui/aboutus/values/Values";
import Vission from "@/_ui/aboutus/vission/Vission";

export default function Products() {
  return (
    <div>
      <Hero />
      <Navigation />
      <Story />
      <Mission />
      <Vission />
      <Values />
      <Commission />
    </div>
  );
}
