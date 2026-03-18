import React from 'react'
import DropFilter from './utilies/Dropdowen'
import { sort } from '@/data/filters'
import Navigation from '../navigation/Navigation'

function FilterSection() {
    return (
        <section>
            <div className='py-clamp-32 px-clamp-40 bg-full border-b border-b-gray400'>
                <div className='flex flex-wrap justify-center gap-clamp-42'>
                    {/* filter  */}
                    <div className='order-2 md:order-1 flex gap-clamp-64 items-center overflow-auto'>
                        <Navigation />
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