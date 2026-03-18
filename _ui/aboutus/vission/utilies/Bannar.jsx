import Image from 'next/image'

function Bannar() {
    return (
        <div className='relative h-fit'>
            <div className='relative flex gap-clamp-20 w-[clamp(300px,49.479vw,950px)]'>
                <div data-aos="zoom-in-right" data-aos-duration="1000" className="aspect-[660/646] w-[clamp(220px,34.375vw,660px)] relative">
                    <Image src="/images/backdrops/angel.png" fill alt="" className="object-contain" />
                </div>

                <div data-aos="zoom-in-right" data-aos-duration="2000" className="aspect-[270/646] w-[clamp(90px,14.0625vw,270px)] relative">
                    <Image src="/images/backdrops/ringeye.png" fill alt="" className="object-contain" />
                </div>
            </div>
        </div>
    )
}

export default Bannar