import { process } from "@/data/aboutus"
import Card from "./utilies/Card"
function Process() {
    return (
        <section>
            <div className='px-[clamp(20px,5.208vw,100px)] bg-full'>
                <div className='py-[clamp(20px,5.208vw,100px)]'>
                    <div className='text-center max-w-[clamp(300px,39.11vw,751px)] mx-auto mb-clamp-64'>
                        <h3 data-aos="fade-top" data-aos-duration={"800"}  className='text-clamp-64 font-bold uppercase leading-none text-balance mb-clamp-24'>
                            <span className='text-gold100'>The</span> Sacred <span className='text-gold100'>Process</span>
                        </h3>
                        <p data-aos="fade-top" data-aos-duration={"1000"}  className='text-clamp-18 text-gray200 leading-[1.7]'>
                            Three steps to transform your iris into an eternal masterpiece, following ancient principles of precision and beauty.
                        </p>
                    </div>

                    {/* cards  */}
                    <div className="flex flex-wrap justify-center gap-[clamp(20px,7.29vw,140px)]">
                        {process.map((item,index) => (
                            <Card key={index+item.title} {...item} index={index}/>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Process