import Image from 'next/image'
import React from 'react'

function UserPicture({ user }) {
  return (
<div className="relative overflow-hidden w-[200px] h-[200px] 3xl:w-[400px] 3xl:h-[400px]">
    <style>{`
        @keyframes scanLine {
            0%   { transform: translateY(-100%); }
            100% { transform: translateY(100%); }
        }
        .scan-line {
            animation: scanLine 1.5s ease-in-out infinite;
        }
    `}</style>

    <Image
        src={user}
        className="w-full h-full object-cover"
        width={400}
        height={400}
        alt="user uploaded picture"
    />

    {/* scan line */}
    <div className="scan-line z-10 absolute top-0 left-0 w-full h-[50%] bg-[linear-gradient(0deg,rgba(174,121,41,0)_0%,#AE7929_50%,rgba(174,121,41,0)_100%)]" />
</div>
  )
}

export default UserPicture