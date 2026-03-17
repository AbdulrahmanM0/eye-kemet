"use client"

import { useState } from "react";
import Timer from "./Timer"

function Resend() {
    const [time, setTime] = useState(12 * 60);

    return (
        <div className='flex flex-col gap-clamp-24'>
            {/* resend otp  */}
            <button onClick={(e)=>{e.preventDefault(); setTime(12 * 60)}} className='text-clamp-18 font-bold leading-[1.14] underline text-gold100 uppercase underline'>
                Resend OTP
            </button>

            {/* alert  */}
            <div className='p-clamp-20 flex gap-clamp-20 bg-gray400 border border-gray300 rounded-[5px]'>
                {/* secure icon  */}
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M11.7021 2.0455C11.9285 1.97483 12.1736 1.98644 12.3936 2.08065L18.7881 4.82089C19.5232 5.1361 19.9999 5.85894 20 6.65878V13.5172C19.9999 16.0291 18.6536 18.349 16.4727 19.5953L12.4961 21.8678C12.1887 22.0434 11.8113 22.0434 11.5039 21.8678L7.52734 19.5953C5.34639 18.349 4.00009 16.0291 4 13.5172V6.65878C4.00009 5.85894 4.47682 5.1361 5.21191 4.82089L11.6064 2.08065L11.7021 2.0455ZM15.707 9.29257C15.3165 8.90204 14.6835 8.90204 14.293 9.29257L11 12.5855L9.70703 11.2926C9.31651 10.902 8.68349 10.902 8.29297 11.2926C7.90257 11.6831 7.90249 12.3161 8.29297 12.7066L10.293 14.7066C10.6835 15.097 11.3165 15.097 11.707 14.7066L15.707 10.7066C16.0975 10.3161 16.0974 9.6831 15.707 9.29257Z" fill="#AE7929" />
                </svg>
                {/* text  */}
                <p className='text-clamp-18 leading-[1.7] text-light100'>
                    OTP verification protects your account from <br /> unauthorized access.
                </p>
            </div>

            {/* timer  */}
            <div className='flex gap-clamp-10 text-light200 leading-[0.7] justify-center items-center'>
                <p>
                    Resend OTP on email in
                </p>
                <Timer time={time} setTime={setTime}/>
                <p>
                    Second
                </p>
            </div>
        </div>
    )
}

export default Resend