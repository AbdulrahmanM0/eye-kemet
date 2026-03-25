"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useTransition } from "react";

export default function LoadMoreButton({ deals }) {
  const [isPending, startTransition] = useTransition();

  const perPage = deals?.pagination?.per_page;
  const totalCount = deals?.pagination?.total_count;

  const disabledBtn = (perPage >= totalCount);

  const router = useRouter();
  const searchParams = useSearchParams();

  const handleLoadMore = () => {
    const params = new URLSearchParams(searchParams.toString());
    const current = parseInt(searchParams.get("per_page") || "1");

    params.set("per_page", current + 1);

    startTransition(() => {
      router.push(`?${params.toString()}`, { scroll: false });
    });
  };

  return (
    <div className="w-fit mx-auto">
      {!disabledBtn && (
        <button
          disabled={disabledBtn || isPending}
          onClick={handleLoadMore}
          className="secondary-btn px-clamp-28 py-clamp-16"
        >
          {isPending ? "Loading..." : "Load More"}

          {!isPending && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-clamp-24 h-clamp-24 text-clamp-24"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M20 18.4805H18V8.41406L6.70703 19.707L5.29297 18.293L16.5859 7H6.51953V5H19C19.5523 5 20 5.44772 20 6V18.4805Z"
                fill="#FEFEFE"
              />
            </svg>
          )}
        </button>
      )}
    </div>
  );
}