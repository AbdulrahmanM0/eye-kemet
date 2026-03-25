import Head from "../utilies/Head"
import Product from "./utilies/Product"

function OrederHistory({ orders , data }) {

    return (
        <div className='p-clamp-64 flex flex-col gap-clamp-20 border-gray400 border w-[clamp(320,65.52vw,1258px)]'>
            <Head head={data.head.head} slogan={data.head.slogan}/>
            {orders && orders?.orders?.length > 0 ?
                <div
                    data-aos="fade-up"
                    className="columns-1 md:columns-2 gap-clamp-20"
                >
                    {orders?.orders?.map((item, index) => (
                        <div
                            key={index}
                            className="break-inside-avoid mb-clamp-20"
                        >
                            <Product {...item} data={data}/>
                        </div>
                    ))}
                </div>
                :
                <h6 className="p-clamp-24 text-gray200  text-center text-balance uppercase">
                    No Order History
                </h6>
            }
        </div>
    )
}

export default OrederHistory