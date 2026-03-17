import React from 'react'

function Authintication({children,head,title,slogan}) {
    return (
        <div className='border border-gray400 p-clamp-64 xl:max-w-[36vw] bg-full'>
            {/* heading  */}
            <div className='flex flex-col gap-clamp-24 '>
                <h6 className='text-clamp-18 leading-[0.7] text-gray200'>
                    {head}
                </h6>
                <h3 className='text-clamp-64 font-bold uppercase leading-none text-balance'>
                    {title}
                </h3>
                <h6 className='text-clamp-18 leading-[0.7] text-gray200 leading-[1.2]'>
                    {slogan}
                </h6>
            </div>
            {/* form  */}
            <div className='relative z-10'>
                {children}
            </div>
        </div>
    )
}

export default Authintication