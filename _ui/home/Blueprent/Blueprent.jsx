import AuthBackdrop from '@/components/layout/backdrop/AuthBackdrop'
import Image from 'next/image'

function Blueprent() {
    return (
        <div className='relative'>
            <AuthBackdrop>
                <section className='max-w-[clamp(500px,76.82vw,1475px)] my-auto relative z-10'>
                    <div className='mb-[clamp(40px,6.25vw,120px)]'>
                        <h2 data-aos="fade-up" data-aos-duration={"800"} className='text-[clamp(30px,6.46vw,124px)] font-bold leading-[1.2] uppercase text-light400 text-center'>
                            The Blueprint <span className='text-gold100'>of the Soul.</span>
                            Captured in Gold.
                        </h2>
                    </div>
                    <div className='flex flex-wrap justify-center md:justify-between gap-clamp-40'>
                        {/* slogann  */}
                        <p data-aos="fade-right" data-aos-duration={"800"}  className='text-clamp-18 text-light200 max-w-[clamp(250px,25.68vw,493px)] leading-[1.7]'>
                            Transform your unique iris into a luxurious work of art. Each piece captures the intricate patterns that make you distinctly you.
                        </p>

                        {/* button  */}
                        <div>
                            <button data-aos="fade-left" data-aos-duration={"800"}  className='secondary-btn'>
                                Begin Your Journey
                                <svg xmlns="http://www.w3.org/2000/svg" className='w-clamp-24 h-clamp-24 text-clamp-24' width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M20 18.4805H18V8.41406L6.70703 19.707L5.29297 18.293L16.5859 7H6.51953V5H19C19.5523 5 20 5.44772 20 6V18.4805Z" fill="#FEFEFE" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </section>

                {/* backdrop  */}
                <div className='absolute top-1/2 -translate-y-1/2'>
                    <Image src="/images/backdrops/rings.png" className='w-[clamp(400px,37.81vw,726px)]' width={726} height={861} alt="rings" />
                    <div data-aos="fade-up" className="absolute inset-0 z-10 bg-[radial-gradient(44.53%_60.68%_at_48.1%_57.12%,_rgba(0,0,0,0)_0%,_#000_100%)]">
                        <div className='absolute bottom-0 left-0 border-t-[3px] border-t-[#AE7929] w-full h-[50%] bg-[linear-gradient(180deg,_#483211_0%,_rgba(174,121,41,0)_80%)] mix-blend-color'></div>
                    </div>
                </div>
            </AuthBackdrop>
        </div>
    )
}

export default Blueprent