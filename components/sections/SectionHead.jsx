import React from 'react'
import Navigation from '../items/navigation/Navigation'
import Image from 'next/image'

function SectionHead({data , children}) {
    return (
        <section>
            <div className='bg-full overflow-hidden overflow-hidden'>
                {/* navigation & title  */}
                <div data-aos="flip-up" className='p-clamp-60 text-center flex flex-col gap-clamp-40'>
                    <Navigation {...data}/>
                    <h4 className='text-light400 text-clamp-36 font-bold leading-none uppercase'>
                        {data?.title ? data.title : "Shop Now"}
                    </h4>
                </div>
                {/* bannar  */}
                <div className='relative' data-aos="fade-up">
                    <Image src={data?.img || `/images/bannars/produces-headsection.png`} width={1920} height={612} alt="image"/>
                    <div className='absolute z-10 w-full h-full bottom-0'>
                        {children}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SectionHead