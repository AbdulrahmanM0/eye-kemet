import AuthBackdrop from "@/components/layout/backdrop/AuthBackdrop"
import Image from "next/image"

function About() {
    return (
        <div className='relative'>
            <AuthBackdrop>
                <section className="w-full h-full relative z-10">
                    <div className='px-[clamp(20px,5.208vw,100px)] w-full h-full'>
                        <div className='py-[clamp(20px,5.208vw,100px)] w-full h-full'>

                            <div className="flex flex-wrap md:flex-nowrap justify-between gap-clamp-64">
                                {/* col-1 about us  */}
                                <div className="flex flex-col gap-clamp-48">
                                    <h6 className="text-balance leading-[0.7] text-clamp-18">
                                        About
                                    </h6>
                                    <p className="text-clamp-18 text-gray200 leading-[1.7]">
                                        Welcome to Eye Kemet, where we unveil the <br /> captivating world of iris artistry!
                                    </p>
                                </div>

                                {/* col-2 image  */}
                                <div className="relative">
                                    <Image src={"/images/backdrops/eyeAngel.png"} className="max-w-[clamp(200px,29.69vw,570px)]" width={570} height={686} alt="eye angel product" />
                                </div>

                                {/* col-3 more about */}
                                <div className="flex flex-col gap-clamp-40">
                                    <p className="text-clamp-18 text-gray200 leading-[1.7]">
                                        At Eye Kemet, we transform your iris into <br/> personalized jewelry. Discover rings,<br/> necklaces, bracelets, and more, each<br/> reflecting your unique essence with artistry.
                                    </p>

                                    {/* button  */}
                                    <div className="w-fit">
                                        <button className='secondary-btn'>
                                            More about us
                                            <svg xmlns="http://www.w3.org/2000/svg" className='w-clamp-24 h-clamp-24 text-clamp-24' width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                <path d="M20 18.4805H18V8.41406L6.70703 19.707L5.29297 18.293L16.5859 7H6.51953V5H19C19.5523 5 20 5.44772 20 6V18.4805Z" fill="#FEFEFE" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div className="w-[calc(100%+clamp(20px,5.208vw,100px)+clamp(20px,5.208vw,100px))] -translate-x-[clamp(20px,5.208vw,100px)]">
                                <h2 className="text-[clamp(30px,16.67vw,320px)] font-bold text-balance uppercase leading-[0.7] w-fit mx-auto mt-clamp-64 md:mt-[clamp(-82px,-3vw,-20px)]">
                                    Eye Kemet
                                </h2>
                            </div>

                        </div>
                    </div>
                </section>
            </AuthBackdrop>
        </div>
    )
}

export default About