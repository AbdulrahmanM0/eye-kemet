import Image from 'next/image'

function Card({ title, img, slogan, price }) {
    return (
        <div className='w-full relative'>
            {/* background  */}
            <Image src={`/images/products/materials/${img}`} className='w-full object-cover min-h-[300px]' width={1720} height={777} alt={title} />

            {/* content  */}
            <div className='absolute bottom-0 left-0 w-full p-clamp-100 flex flex-col gap-clamp-20 bg-gradient-to-b from-black/0 to-black'>
                <h4 className='text-clamp-28 text-light400 font-bold leading-[1.2] uppercase '>
                    {title}
                </h4>
                <p className='text-clamp-16 leading-none text-light200'>
                    {slogan}
                </p>
                <h4 className='text-clamp-28 text-light400 font-bold leading-[1.2] uppercase'>
                    {price?.price} {price.currancy}
                </h4>
            </div>
        </div>
    )
}

export default Card