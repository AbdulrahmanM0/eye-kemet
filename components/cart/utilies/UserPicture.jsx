import Image from 'next/image'
import React from 'react'

function UserPicture() {
  return (
    <div >
        <Image src={"/images/user.png"} className='w-full h-auto' width={400} height={400} alt='user uploaded picture'/>
    </div>
  )
}

export default UserPicture