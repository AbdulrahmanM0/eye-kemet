"use client"
import Image from 'next/image'
import Secondary from '../btn/Secondary'
import React, { useRef, useEffect, useState } from "react";

function Blog({ title, type, img, date }) {
    const divRef = useRef(null);
    const [margin, setMargin] = useState(0);

    useEffect(() => {
        if (divRef.current) {
            setMargin(divRef.current.offsetHeight);
        }
    }, []);

    return (
        <div className="relative flex flex-col items aspect-[482.813/672] w-[clamp(260px,25.146vw,482.813px)] bg-full group hover:bg-wd600">
            <div className='flex-1 relatve'>
                {/* heading  */}
                <div className='p-clamp-36 flex gap-clamp-10 absolute top-0 left-0'>
                    {/* gold  */}
                    <div className='py-clamp-12 px-clamp-16 text-clamp-16 leading-[0.7] text-balance bg-gold100 whitespace-nowrap shrink-0'>
                        {type}
                    </div>
                </div>

                {/* image  */}
                <div className='relative flex-1 h-full'>
                    <Image src={`/images/blogs/${img}`} className='object-cover' fill alt={title} />
                </div>
            </div>

            {/* footer  */}
            <div className='p-clamp-36 text-center overflow-hidden absolute bottom-0 left-0 w-full flex flex-col gap-clamp-24 bg-full group-hover:bg-transparent transition-all duration-500'>
                {/* title  */}
                <div className='flex flex-col gap-clamp-24 '>
                    <h5 className='leading-none text-balance uppercase font-bold text-clamp-28'>
                        {title}
                    </h5>
                    <div className={`text-light100 p-clamp-12 flex gap-clamp-14 text-clamp-18 leading-[0.7] items-center justify-center`}>
                        {date}
                    </div>
                </div>

                {/* Read & date  */}
                <div ref={divRef}
                    style={{ marginBottom: `-${margin + 36}px` }} className="transition-all duration-500 mb-[-100%] group-hover:!mb-0">
                    <div className='w-full'>
                        <Secondary />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Blog