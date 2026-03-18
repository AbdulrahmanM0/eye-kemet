"use client"

import { useRouter, useSearchParams } from "next/navigation"
import { useEffect } from "react"

export default function LoadMoreButton() {
    const router = useRouter()
    const searchParams = useSearchParams()

    useEffect(() => {
        const params = new URLSearchParams(searchParams.toString())
        params.set("per_page", "1")
        router.replace(`?${params.toString()}`, { scroll: false })
    }, [])

    const handleLoadMore = () => {
        const params = new URLSearchParams(searchParams.toString())
        const current = parseInt(searchParams.get("per_page") || "1")
        params.set("per_page", current + 1)
        router.push(`?${params.toString()}`, { scroll: false })
    }

    return (
        <div className="w-fit mx-auto">
            <button onClick={handleLoadMore} className='secondary-btn px-clamp-28 py-clamp-16'>
                Load More
                <svg xmlns="http://www.w3.org/2000/svg" className='w-clamp-24 h-clamp-24 text-clamp-24' width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M20 18.4805H18V8.41406L6.70703 19.707L5.29297 18.293L16.5859 7H6.51953V5H19C19.5523 5 20 5.44772 20 6V18.4805Z" fill="#FEFEFE" />
                </svg>
            </button>
        </div>
    )
}