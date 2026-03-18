import Image from 'next/image'
import React from 'react'

function Card({ name, image_url, icon, count,index }) {

    //  {
    //     title: "Rings",
    //     img: "rings.png",
    //     icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="33" viewBox="0 0 24 33" fill="none">
    //         <path fill-rule="evenodd" clip-rule="evenodd" d="M8.37903 0H15.621L20.121 4.5L15.192 9.429C17.991 10.2014 20.4151 11.9624 22.0147 14.3856C23.6144 16.8089 24.2812 19.7299 23.8915 22.6072C23.5017 25.4846 22.082 28.123 19.8954 30.0335C17.7088 31.9439 14.9036 32.9967 12 32.9967C9.09642 32.9967 6.29129 31.9439 4.10468 30.0335C1.91807 28.123 0.498307 25.4846 0.108601 22.6072C-0.281105 19.7299 0.385679 16.8089 1.98534 14.3856C3.585 11.9624 6.00903 10.2014 8.80803 9.429L3.87903 4.5L8.37903 0ZM3.00003 21C3.00003 18.6131 3.94824 16.3239 5.63607 14.636C7.3239 12.9482 9.61308 12 12 12C14.387 12 16.6762 12.9482 18.364 14.636C20.0518 16.3239 21 18.6131 21 21C21 23.3869 20.0518 25.6761 18.364 27.364C16.6762 29.0518 14.387 30 12 30C9.61308 30 7.3239 29.0518 5.63607 27.364C3.94824 25.6761 3.00003 23.3869 3.00003 21Z" fill="#F7F2EA" />
    //     </svg>,
    //     count: 120
    // }
  return (
    <div className='relative group' data-aos="fade-up" data-aos-duration={(index + 1) * 1000}>
      <img src={image_url || `/images/categories/bracelete.png`} className='object-cover w-full' alt={name} />

      {/* frame  */}
      <div className='absolute w-full h-full top-0 left-0 bg-[#0808084D] p-clamp-64 flex justify-center'>

        <div className='relative w-full h-full'>
          <div className='absolute bottom-0 w-full transition-all duration-500 ease-in-out group-hover:bottom-1/2 group-hover:translate-y-[50%] flex flex-col gap-clamp-24 text-center'>
            <div className='w-clamp-36 h-clamp-36 text-clamp-36 w-fit mx-auto'>
              {icon}
            </div>
            <div>
              <h4 className='text-clamp-20 leading-[1.2] text-balance font-bold uppercase'>
                {name}
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
            {name}
          </h3>
        </div>
      </div>
    </div>
  )
}

export default Card