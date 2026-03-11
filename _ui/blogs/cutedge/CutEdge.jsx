import Image from "next/image";

function CutEdge() {
  return (
    <section>
      <div className="w-full flex gap-clamp-20 py-clamp-64">
        
        <div className="relative w-[clamp(300px,72.135vw,1385px)] aspect-[1385/581]">
          <Image
            src="/images/backdrops/cutedge1.png"
            fill
            alt="cut edge"
            className="object-cover"
          />
        </div>

        <div className="relative w-[clamp(120px,26.823vw,515px)] aspect-[515/581]">
          <Image
            src="/images/backdrops/cutedge2.png"
            fill
            alt="cut edge"
            className="object-cover"
          />
        </div>

      </div>
    </section>
  );
}

export default CutEdge;