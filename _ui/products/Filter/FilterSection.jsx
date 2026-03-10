import React from 'react'
import DropFilter from './utilies/Dropdowen'
import { filters ,sort } from '@/data/filters'

function FilterSection() {
    return (
        <section>
            <div className='py-clamp-32 px-clamp-40 bg-full border-b border-b-gray400'>
                <div className='flex flex-wrap justify-between gap-clamp-42'>
                    {/* filter  */}
                    <div className='order-2 md:order-1  flex gap-clamp-64 items-center overflow-auto'>
                        <div className='text-light200 text-clamp-16 leading-[0.7] whitespace-nowrap'>
                            Filter by :
                        </div>

                        {/* dropdowens  */}
                        {filters.map((item, index) => (
                            <div key={item.title + index}>
                                <DropFilter {...item} />
                            </div>
                        ))}
                    </div>

                    {/* sort  */}
                    <div className='order-1 md:order-2  flex gap-clamp-42 items-center'>
                        <div className='text-light200 text-clamp-16 leading-[0.7]'>
                            Sort by :
                        </div>

                        {/* dropdowens  */}
                            <div>
                                <DropFilter {...sort} />
                            </div>
                    </div>
                </div>
            </div>

            {/* count items  */}
            <div className='text-clamp-18 leading-[0.7] text-gray200 p-clamp-40 bg-full'>
                158 items found
            </div>
        </section>
    )
}

export default FilterSection