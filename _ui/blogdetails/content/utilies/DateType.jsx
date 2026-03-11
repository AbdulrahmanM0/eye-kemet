import React from 'react'

function DateType() {
    return (
        <div className='flex gap-clamp-24'>
            <div className='py-clamp-12 px-clamp-16 text-clamp-16 leading-[0.7] text-balance bg-gold100 whitespace-nowrap shrink-0'>
                Featured
            </div>
            <div className={`text-light100 p-clamp-12 flex gap-clamp-14 text-clamp-18 leading-[0.7] items-center justify-center`}>
                July 14, 2022
            </div>
        </div>
    )
}

export default DateType