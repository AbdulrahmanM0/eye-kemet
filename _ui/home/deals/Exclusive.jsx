import handleProducts from '@/api/products/Exclusive';
import PrimaryBtn from '@/components/btn/Primary'
import Product from '@/components/cards/Product'
import Swipper from '@/components/swiper/products/Swipper'
// import { products } from '@/data/products'
async function Exclusive({ title, slogan }) {
   
    const deals = await handleProducts(
        {
            order_by: "recommend",
            limit: "10",
            order: "asc",
            per_page: "eq.12",
            is_featured: true
        }
    );
    console.log(deals, "dealssss")

    return (
        <section>
            <div className='bg-full py-clamp-100 '>
                {/* heading  */}
                <div className='flex flex-wrap gap-clamp-24 justify-between mb-clamp-64 px-[clamp(20px,2.083vw,40px)] mb-clamp-64'>
                    {/* title  */}
                    <div className='flex flex-col gap-clamp-24' >
                        <h3 data-aos="fade-up" data-aos-duration="800" className='text-clamp-64 text-balance font-bold uppercase leading-none'>
                            {title}
                        </h3>
                        <p data-aos="fade-up" data-aos-duration="900" className='text-gray100 text-clamp-16 leading-none'>
                            {slogan}
                        </p>
                    </div>

                    <div data-aos="fade-up" data-aos-duration="1000">
                        <PrimaryBtn />
                    </div>
                </div>

                {/* swiper  */}
                {deals?.products?.length > 0 &&
                    <div  >
                        <Swipper content={deals?.products?.map((item, index) => (<Product key={item.id} {...item} />))} />
                    </div>
                }
            </div>
        </section>
    )
}

export default Exclusive