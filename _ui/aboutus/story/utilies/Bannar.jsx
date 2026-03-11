import Image from 'next/image'

function Bannar() {
    return (
        <div className='relative h-fit pl-clamp-28 pb-[clamp(28px,6.666vw,128px)]'>
            <div className='translate-x-clamp-100 relative'>
                <Image src="/images/bannars/pharo.png" width={970} height={664} alt='' />
            </div>
            <div className='absolute bottom-0 left-0 w-[36.91%]'>
                <Image src="/images/bannars/nickle.png" width={385} height={525} alt='' />
            </div>
        </div>
    )
}

export default Bannar