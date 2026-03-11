import React from 'react'
import Navigation from '../items/navigation/Navigation'
import Image from 'next/image'

function SectionHead({data}) {
    return (
        <section>
            <div className='bg-full'>
                {/* navigation & title  */}
                <div className='p-clamp-60 text-center flex flex-col gap-clamp-40'>
                    <Navigation {...data}/>
                    <h4 className='text-light400 text-clamp-36 font-bold leading-none uppercase'>
                        {data?.title ? data.title : "Shop Now"}
                    </h4>
                </div>
                {/* bannar  */}
                <div>
                    <Image src={`/images/bannars/produces-headsection.png`} width={1920} height={612} alt="image"/>
                </div>
            </div>
        </section>
    )
}

export default SectionHead