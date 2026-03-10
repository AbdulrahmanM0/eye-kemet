import PrimaryBtn from '@/components/btn/Primary'
import React from 'react'

function Card({icon,title,body,action}) {
  return (
    <div className='p-clamp-88 flex flex-col gap-clamp-48 border border-gray400 flex-1'>
        {/* icon  */}
        <div>
            {icon}
        </div>
        <div>
            <h3 className='text-clamp-64 text-balance font-bold uppercase leading-none'>
                {title}
            </h3>
        </div>
        <div className='mt-auto'>
            <p className='text-clamp-18 leading-[1.7] text-gray200'>
                {body}
            </p>
        </div>
        <div>
            <PrimaryBtn />
        </div>
    </div>
  )
}

export default Card