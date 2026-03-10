import Image from 'next/image'
import React from 'react'

function Card({ title, img, icon, count }) {
  return (
    <div className='relative group '>
      <img src={`/images/categories/${img}`} className='object-cover w-full' alt={title} />

      {/* frame  */}
      <div className='absolute w-full h-full top-0 left-0 bg-[#0808084D] p-clamp-64 flex justify-center'>

        <div className='relative w-full h-full'>
          <div className='absolute bottom-0 w-full transition-all duration-500 ease-in-out group-hover:bottom-1/2 group-hover:translate-y-[50%] flex flex-col gap-clamp-24 text-center'>
            <div className='w-clamp-36 h-clamp-36 text-clamp-36 w-fit mx-auto'>
              {icon}
            </div>
            <div>
              <h4 className='text-clamp-20 leading-[0.7] text-balance font-bold uppercase'>
                {title}
              </h4>
            </div>
            <div>
              <p className='text-clamp-16 leading-[0.7] text-light300'>
                + {count} Items
              </p>
            </div>
          </div>
        </div>

        {/* rotated title  */}
        <div>
          <h3 className="text-clamp-64 text-light200 uppercase font-bold opacity-50 
               absolute bottom-0 left-clamp-8
               [writing-mode:vertical-rl]
               leading-[0.7] scale-y-[-1] scale-x-[-1] group-hover:opacity-100 group-hover:text-balance transition-all duration-500 ease-in-out">
            {title}
          </h3>
        </div>
      </div>
    </div>
  )
}

export default Card