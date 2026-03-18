
function Card({title,icon,body,index}) {
  return (
    <div className="flex flex-col gap-clamp-32 text-center" data-aos="fade-top" data-aos-duration={(index + 1) * 1600} >
        {/* icon */}
        <div>
            <div className='p-clamp-30 border-[2px] border-gold100 rounded-full w-fit mx-auto'>
                {icon}
            </div>
        </div>

        <div className="flex flex-col gap-clamp-32 w-[clamp(250px,19.74vw,379px)]">
            <h4 className="text-clamp-28 font-bold text-balance uppercase ">
                {title}
            </h4>
            <p className="text-clamp-16 leading-[1.74] text-gray200">
                {body}
            </p>
        </div>
    </div>
  )
}

export default Card