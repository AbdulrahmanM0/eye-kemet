import { Star } from "lucide-react";

export default function StarRating({
  rating = 0,
  max = 5,
}) {
  return (
    <div className="flex gap-[5px]">
      {Array.from({ length: max }).map((_, i) => (
        <Star
          key={i}
          className={`h-[24px] w-[24px] ${
            i < rating
              ? "fill-gold100 text-gold100"
              : "border-gold100"
          } text-gold100`}
        />
      ))}
    </div>
  );
}
