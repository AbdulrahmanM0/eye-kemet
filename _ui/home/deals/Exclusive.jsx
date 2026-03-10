import PrimaryBtn from '@/components/btn/Primary'
import Product from '@/components/cards/Product'
import Swipper from '@/components/swiper/products/Swipper'
import { products } from '@/data/products'
function Exclusive({title,slogan}) {
    return (
        <section>
            <div className='bg-full py-clamp-100 '>
                {/* heading  */}
                <div className='flex flex-wrap gap-clamp-24 justify-between mb-clamp-64 px-[clamp(20px,2.083vw,40px)] mb-clamp-64'>
                    {/* title  */}
                    <div className='flex flex-col gap-clamp-24'>
                        <h3 className='text-clamp-64 text-balance font-bold uppercase leading-none'>
                            {title}
                        </h3>
                        <p className='text-gray100 text-clamp-16 leading-none'>
                            {slogan}
                        </p>
                    </div>

                    <div>
                        <PrimaryBtn />
                    </div>
                </div>

                {/* swiper  */}
                <div>
                    <Swipper content={products.map((item,index) => (<Product key={item.title + index} {...item}/>))}/>
                </div>
            </div>
        </section>
    )
}

export default Exclusive