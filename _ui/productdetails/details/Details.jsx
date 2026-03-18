import ProductImgs from './utilies/ProductImgs'
import Description from './utilies/Description'
import TabsDetails from './utilies/TabsDetails'

function Details({data}) {
  console.log(data,"productee")
  return (
    <section>
      <div className='sm:px-clamp-100 py-clamp-100 bg-full'>
        <div className='grid xl:grid-cols-2 gap-clamp-100'>
          {/* cols 1 */}
          <div className='py-clamp-100'>
            <ProductImgs images={data?.data[0]}/>
            <TabsDetails details={data?.data[0]}/>
          </div>

          {/* cols 2  */}
          <div className='py-clamp-100'>
            <div className='p-clamp-64 sticky top-[var(--header-height)]'>
              <Description details={data?.data[0]}/>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Details