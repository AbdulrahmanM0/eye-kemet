import AuthBackdrop from "@/components/layout/backdrop/AuthBackdrop"
import Image from "next/image"

function Mission() {
    return (
        < section className='relative' id="mission">
            <AuthBackdrop>
                <section className="w-full h-full relative z-10">
                    <div className='px-[clamp(20px,5.208vw,100px)] w-full h-full overflow-hidden'>
                        <div className='py-[clamp(20px,5.208vw,100px)] w-full h-full flex items-center'>
                            <div className="flex flex-col gap-clamp-82 text-center">
                                <h6 className='text-balance text-clamp-18 leading-[0.7] pb-clamp-54'>
                                    Our Mission
                                </h6>

                                <div className="relative h-[clamp(40px,7.29vw,140px)] flex w-[calc(100%+clamp(20px,5.208vw,100px)*2)] -translate-x-[clamp(20px,5.208vw,100px)]">
                                    <h2
                                        className="absolute left-1/2 -translate-x-1/2 text-[clamp(30px,10.42vw,200px)] font-bold text-balance uppercase leading-[0.7]"
                                        style={{ whiteSpace: "nowrap" }}
                                    >
                                        Eye Kemet mission
                                    </h2>
                                </div>

                                <div>
                                    <p className="text-clamp-18 text-gray200">
                                        Eye Kemet is dedicated to crafting personalized jewelry that embodies the unique narrative held within your eyes. We transform your gaze into enduring art, celebrating your personal story.
                                    </p>
                                </div>
                                {/* col-1 */}
                                {/* <div>

                                    <Image src={"/images/backdrops/nicle.png"} className="w-[clamp(270px,22.656vw,435px)] object-contain" width={435} height={359} alt="" />
                                </div> */}

                                {/* col-2 slogan  */}
                                {/* <div className="flex flex-col justify-betwee text-center">
                                    <h6 className='text-balance text-clamp-18 leading-[0.7]'>
                                        Our Mission
                                    </h6>
                                    <div className="relative w-[calc(100%+clamp(20px,5.208vw,100px)+clamp(20px,5.208vw,100px))] -translate-x-[clamp(20px,5.208vw,100px)]">
                                        <h2
                                            style={{ whiteSpace: "nowrap" }}
                                            className="absolute left-1/2 -translate-x-1/2 text-[clamp(30px,10.4vw,320px)] font-bold uppercase leading-[0.7] text-balance"
                                        >
                                            Eye Kemet mission
                                        </h2>
                                    </div> */}
                                {/* sloga  */}
                                {/* <div>
                                        <p className="text-clamp-18 text-gray200">
                                            Eye Kemet is dedicated to crafting personalized jewelry that embodies the unique narrative held within your eyes. We transform your gaze into enduring art, celebrating your personal story.
                                        </p>
                                    </div>
                                </div> */}

                                {/* col-3 */}
                                {/* <div>
                                    <Image src={"/images/backdrops/eyeAngel.png"} className="max-w-[clamp(200px,29.69vw,570px)]" width={570} height={686} alt="eye angel product" />
                                </div> */}
                            </div>
                        </div>
                    </div>
                </section>
            </AuthBackdrop>
            <div className="absolute top-0 left-0 w-full h-full px-clamp-100 flex justify-between z-10">
                {/* col1  */}
                <div className="h-full pt-clamp-88">
                    <Image src={"/images/backdrops/nicle.png"} className="sticky top-clamp-100 w-[clamp(220px,22.66vw,435px)]" width={435} height={359} alt="" />
                </div>
                {/* col2 */}
                <div className="h-full flex flex-col">
                    <Image src={"/images/backdrops/eyeAngel.png"} className="mt-auto w-[clamp(215px,21.61vw,415px)]" width={415} height={571} alt="" />
                </div>
            </div>
        </section>
    )
}

export default Mission