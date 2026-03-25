import React from 'react'
import Navigation from '../navigation/Navigation'

function FilterSection({params}) {
    return (
        <section>
            <div className='px-clamp-40 bg-full border-b border-b-gray400'>
                <div className='flex flex-wrap justify-center gap-clamp-42'>
                    {/* filter  */}
                    <div className='order-2 md:order-1 flex gap-clamp-64 items-center overflow-auto'>
                        <Navigation params={params}/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FilterSection