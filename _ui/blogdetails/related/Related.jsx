import PrimaryBtn from '@/components/btn/Primary'
import Blog from '@/components/cards/Blog'
import { blogs } from '@/data/blogs'
import Swipper from '@/components/swiper/products/Swipper'

function Related({title,slogan}) {
    
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
                    <Swipper content={blogs.map((item,index) => (<Blog key={item.title + index} {...item} />))}/>
                </div>
            </div>
        </section>
    )
}

export default Related