"use client"
import Image from 'next/image'
import Link from 'next/link';
import React, { useRef, useEffect, useState } from "react";

function Blog({ title, status, cover_image_url, slug, created_at }) {
    const divRef = useRef(null);
    const [margin, setMargin] = useState(0);
    const date = new Date(created_at);

    const formatted = date.toLocaleString("en-GB", {
        day: "numeric",
        month: "long",
        year: "numeric",
    });

    useEffect(() => {
        if (divRef.current) {
            setMargin(divRef.current.offsetHeight);
        }
    }, []);

    return (
        <div className="relative flex flex-col items aspect-[482.813/672] w-[clamp(260px,25.146vw,482.813px)] bg-full group hover:bg-wd600">
            <div className='flex-1 relatve'>
                {/* heading  */}
                <div className='z-10 p-clamp-24 3xl:p-clamp-36 flex gap-clamp-10 absolute top-0 left-0'>
                    {/* gold  */}
                    <div className='py-clamp-12 px-clamp-16 text-clamp-16 leading-[0.7] text-balance bg-gold100 whitespace-nowrap shrink-0'>
                        {status}
                    </div>
                </div>

                {/* image  */}
                <div className='relative flex-1 h-full'>
                    <Image src={cover_image_url} className='object-cover' fill alt={title} />
                </div>
            </div>

            {/* footer  */}
            <div className='p-clamp-36 text-center overflow-hidden absolute bottom-0 left-0 w-full flex flex-col gap-clamp-24 bg-full group-hover:bg-transparent transition-all duration-500'>
                {/* title  */}
                <div className='flex flex-col gap-clamp-24 '>
                    <h5 className='leading-none text-balance uppercase font-bold text-clamp-24 3xl:text-clamp-28'>
                        {title}
                    </h5>
                    <div className={`text-light100 p-clamp-12 flex gap-clamp-14 text-clamp-16 3xl:text-clamp-18 leading-[0.7] items-center justify-center`}>
                        {formatted}
                    </div>
                </div>

                {/* Read & date  */}
                <div ref={divRef}
                    style={{ marginBottom: `-${margin + 36}px` }} className="transition-all duration-500 mb-[-100%] group-hover:!mb-0">
                    <div className='w-full'>
                        <Link href={`/blogs/${slug}`} className='secondary-btn whitespace-nowrap shrink-0'>
                            Read More
                            <svg xmlns="http://www.w3.org/2000/svg" className='w-clamp-24 h-clamp-24' width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M20 18.4805H18V8.41406L6.70703 19.707L5.29297 18.293L16.5859 7H6.51953V5H19C19.5523 5 20 5.44772 20 6V18.4805Z" fill="#FEFEFE" />
                            </svg>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Blog