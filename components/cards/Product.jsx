"use client"
import Image from 'next/image'
import Secondary from '../btn/Secondary'
import React, { useRef, useEffect, useState } from "react";

function Product({ title, price, img, type, views, gold, stock }) {
    const divRef = useRef(null);
    const [margin, setMargin] = useState(0);

    useEffect(() => {
        if (divRef.current) {
            setMargin(divRef.current.offsetHeight);
        }
    }, []);

    return (
        <div className='flex flex-col h-[clamp(200px,62.22vh,672px)] bg-full group hover:bg-wd600 border border-gray400 relative'>
            <div className='flex-1 relatve'>
                {/* heading  */}
                <div className='p-clamp-36 flex gap-clamp-10 absolute top-0 left-0'>
                    {/* gold  */}
                    <div className='py-clamp-12 px-clamp-16 text-clamp-16 leading-[0.7] text-balance bg-gold100 whitespace-nowrap shrink-0'>
                        {gold}
                    </div>
                    {/* views  */}
                    <div className='py-clamp-12 px-clamp-16 text-clamp-16 leading-[0.7] text-gray200 bg-gray400'>
                        {views}
                    </div>
                    {/* type  */}
                    <div className='py-clamp-12 px-clamp-16 text-clamp-16 leading-[0.7] text-gray200 bg-gray400'>
                        {type}
                    </div>
                </div>

                {/* image  */}
                <div className='relative flex-1 h-full'>
                    <Image src={`/images/products/${img}`} className='object-contain' fill alt={title} />
                </div>
            </div>

            {/* footer  */}
            <div className='p-clamp-36 text-center overflow-hidden absolute bottom-0 left-0 w-full flex flex-col gap-clamp-24'>
                {/* title  */}
                <div>
                    <h5 className='leading-[0.7] text-balance uppercase font-bold text-clamp-28'>
                        {title}
                    </h5>
                </div>
                {/* price  */}
                <div className='text-gray200 text-clamp-18 flex gap-clamp-10 justify-center'>
                    {/* from  */}
                    <div>
                        From:
                    </div>
                    <div>
                        {price.from}
                    </div>
                    <span>
                        -
                    </span>
                    {/* to  */}
                    <div>
                        {price.to}
                    </div>
                    {/* currancy  */}
                    <div>
                        {price.currancy}
                    </div>
                </div>

                {/* stock & cart  */}
                <div ref={divRef}
                    style={{ marginBottom: `-${margin + 36}px` }} className="flex flex-col gap-clamp-24 transition-all duration-500 mb-[-100%] group-hover:!mb-0">

                    <div className={`p-clamp-12 flex gap-clamp-14 ${stock ? " text-green100 " : " text-red100 "} text-clamp-18 leading-[0.7] items-center justify-center`}>
                        {/* icon  */}
                        {stock ?
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                                <path d="M17 0C17.5523 0 18 0.447715 18 1V15C18 16.6569 16.6569 18 15 18H3C1.34315 18 0 16.6569 0 15V1C0 0.447715 0.447715 0 1 0H17ZM12.707 6.29199C12.3165 5.90151 11.6835 5.90151 11.293 6.29199L8 9.58496L6.70703 8.29199C6.31651 7.90151 5.68349 7.90151 5.29297 8.29199C4.90245 8.68251 4.90247 9.31553 5.29297 9.70605L7.29297 11.7061C7.68349 12.0966 8.31651 12.0966 8.70703 11.7061L12.707 7.70605C13.0975 7.31553 13.0975 6.68251 12.707 6.29199Z" fill="#40D465" />
                            </svg>
                            :
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                                <path d="M17 0C17.5523 0 18 0.447715 18 1V15C18 16.6569 16.6569 18 15 18H3C1.34315 18 0 16.6569 0 15V1C0 0.447715 0.447715 0 1 0H17ZM11.707 6.29199C11.3165 5.90148 10.6835 5.9015 10.293 6.29199L9 7.58496L7.70703 6.29199C7.31652 5.90148 6.6835 5.9015 6.29297 6.29199C5.90244 6.68252 5.90244 7.31553 6.29297 7.70605L7.58594 8.99902L6.29297 10.292C5.90271 10.6825 5.90253 11.3156 6.29297 11.7061C6.68341 12.0964 7.3165 12.0963 7.70703 11.7061L9 10.4131L10.293 11.7061C10.6835 12.0963 11.3166 12.0965 11.707 11.7061C12.0974 11.3156 12.0972 10.6825 11.707 10.292L10.4141 8.99902L11.707 7.70605C12.0975 7.31554 12.0975 6.68251 11.707 6.29199Z" fill="#D44040" />
                            </svg>
                        }
                        {/* text  */}
                        {stock ? "In Stock" : "Out Of Stock "}
                    </div>

                    <div className='w-full'>
                        <Secondary />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product