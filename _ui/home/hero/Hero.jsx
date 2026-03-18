import Image from 'next/image'

function Hero() {
    return (
        <section>
            <div className='w-full h-screen g-[url(/images/bannars/black-background-with-black-background-with-pattern.png)] bg-center bg-cover relative' style={{ backgroundImage: "url(/images/bannars/black-background-with-black-background-with-pattern.png)" }}>
                <Image data-aos="fade-right" data-aos-duration="800" className='h-full w-auto absolute left-0 top-0' src={"/images/items/mask.png"} alt='pharo mask' width={610} height={1080} />
                {/* slogan  */}
                <div className='h-full w-full relative z-10' data-aos="fade-up" data-aos-duration="800" >
                    <div className='h-full w-full max-w-[clamp(400px,91.46vw,1754px)] mx-auto text-center flex items-center justify-center'>
                        <div className='max-w-full'>
                            <h2 className='text-[clamp(30px,6.4583vw,128px)] text-balance font-bold uppercase leading-none'>
                                Eye Kemet Where
                            </h2>
                            <div className='flex flex-wrap justify-center sm:gap-clamp-18'>
                                <h2 className='text-[clamp(30px,6.4583vw,128px)] text-balance font-bold uppercase leading-none'>
                                    Ancient
                                </h2>
                                <div className='relative w-[clamp(80px,12.14vw,233px)] flex items-center'>
                                    <div data-aos="flip-left">
                                        <Image src={"/images/items/nicolas.png"} className='w-[clamp(80px,12.14vw,233px)] h-auto' width={233} height={92} alt='small product image' />
                                    </div>
                                </div>
                                
                                <h2 className='text-[clamp(30px,6.4583vw,128px)] text-balance font-bold uppercase text-gold100 leading-none'>
                                    Inspiration
                                </h2>
                            </div>

                            <div className='flex flex-wrap justify-center sm:gap-clamp-18'>
                                <h2 className='text-[clamp(30px,6.4583vw,128px)] text-balance font-bold uppercase leading-none text-gold100 whitespace-nowrap'>
                                    Meets Modern
                                </h2>
                                <div className='relative w-[clamp(50px,5.99vw,115px)] flex items-center'>
                                    <div data-aos="flip-left">
                                        <Image src={"/images/items/gold-eye.png"} className='w-[clamp(50px,5.99vw,115px)] h-auto' width={233} height={92} alt='small product image' />
                                    </div>
                                </div>
                                <h2 className='text-[clamp(30px,6.4583vw,128px)] text-balance font-bold uppercase leading-none'>
                                    Vision
                                </h2>
                            </div>

                            <div>
                                <h2 className='text-[clamp(30px,6.4583vw,128px)] text-balance font-bold uppercase leading-none'>
                                    Technology...
                                </h2>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero