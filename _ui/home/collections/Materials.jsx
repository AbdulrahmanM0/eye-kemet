import { materials } from "@/data/products"
import Card from "./utilies/Card"
function Materials() {
    return (
        <section>
            <div className='px-[clamp(20px,5.208vw,100px)] bg-full'>
                <div className='pb-[clamp(20px,5.208vw,100px)]'>
                    <div className="
                                    w-full 
                                    grid 
                                    grid-cols-1 md:grid-cols-4 
                                    gap-clamp-20 
                                    [&>*:first-child]:col-span-1 md:[&>*:first-child]:col-span-4 
                                    [&>*:not(:first-child)]:col-span-1 md:[&>*:not(:first-child)]:col-span-2
                                    ">
                        {materials.map((item, index) => (
                            <Card key={item.title + index} {...item} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Materials