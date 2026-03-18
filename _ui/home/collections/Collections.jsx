import Image from "next/image"

function Collections() {
    return (
        <section>
            <div className='px-[clamp(20px,5.208vw,100px)] bg-full'>
                <div className='py-[clamp(20px,5.208vw,100px)]'>

                    {/* eye card  */}
                    <div className='mx-auto max-w-[clamp(300px,68.36vw,1311px)]'>
                        <h3 data-aos="fade-right" data-aos-duration={"800"}  className="text-balance text-clamp-96 leading-[0.7] mb-clamp-28 font-bold uppercase">
                            The Horus
                        </h3>
                        <div className='grid gap-clamp-28 md:gap-0 grid-cols-1 md:grid-cols-2'>
                            <div className="relative">
                                <Image src="/images/backdrops/Union.png" className="w-full" width={251} height={665} alt="eye image" priority/>
                                {/* <h3 className="text-balance text-clamp-96 leading-[0.7] font-bold uppercase text-end mx-clamp-40">
                                    Eye
                                </h3> */}
                            </div>
                            <div className="flex flex-col gap-clamp-64">
                                <h3 data-aos="fade-left" data-aos-duration={"800"}  className="text-gold100 text-clamp-96 leading-[0.7] font-bold uppercase md:flex gap-clamp-32">
                                    <span className="text-balance text-clamp-96 leading-[0.7] font-bold uppercase md:ms-[clamp(-233px,-12.14vw,-100px)] mb-clamp-28 md:mb-0 inline-block" >Eye</span> Collection
                                </h3>
                                <p data-aos="fade-top" data-aos-duration={"800"}  className="text-clamp-18 text-gray200 max-w-[clamp(300px,24.32vw,467px)] mb-clamp-30 me-clamp-30 ms-auto">
                                    Discover the various ways to showcase your unique iris pattern, each option crafted with museum-quality materials.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Collections