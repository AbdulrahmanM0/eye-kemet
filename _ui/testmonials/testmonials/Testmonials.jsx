import { testmonials } from "@/data/testmonials"
import Comment from "./utilis/Comment"
function Testmonials() {
    return (
        <section>
            <div className='bg-full'>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 justify-items-center pb-clamp-64 gap-y-clamp-24'>
                    {testmonials.concat(testmonials).map((item, index) => (
                        <Comment key={item.auther + index} {...item} />
                    ))}
                </div>

                {/* load more  */}
                <div className='pb-clamp-100'>
                    <div className='w-fit mx-auto'>
                        <button className='secondary-btn px-clamp-28 py-clamp-16'>
                            Load More
                            <svg xmlns="http://www.w3.org/2000/svg" className='w-clamp-24 h-clamp-24 text-clamp-24' width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M20 18.4805H18V8.41406L6.70703 19.707L5.29297 18.293L16.5859 7H6.51953V5H19C19.5523 5 20 5.44772 20 6V18.4805Z" fill="#FEFEFE" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Testmonials