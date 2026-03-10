import React from 'react'
import ProductImgs from './utilies/ProductImgs'
import Description from './utilies/Description'
import TabsDetails from './utilies/TabsDetails'

function Details() {
  return (
    <section>
      <div className='px-clamp-100 py-clamp-100 bg-full'>
        <div className='grid xl:grid-cols-2 gap-clamp-100'>
          {/* cols 1 */}
          <div className='py-clamp-100'>
            <ProductImgs />
            <TabsDetails />
          </div>

          {/* cols 2  */}
          <div className='py-clamp-100'>
            <div className='p-clamp-64 sticky top-0'>
              <Description />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Details