"use client"

import { useState } from "react";
import Timer from "./Timer"
import UseSubmit from "@/_ui/auth/signin/hooks/UseSubmit";
import UseResend from "../hooks/UseResend";

function Resend({ phone }) {
    const { time, setTime, handleResend, isSubmitting } = UseResend({ phone });

    return (
        <div className='flex flex-col gap-clamp-24'>
            {/* resend otp  */}
            <button disabled={isSubmitting || time} onClick={handleResend} className='flex items-center justify-center gap-clamp-8 text-clamp-18 font-bold leading-[1.14] underline text-gold100 uppercase underline disabled:opacity-60'>
                {
                    isSubmitting &&
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-clamp-24 h-clamp-24 fill-current text-gold100 animate-spin"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                    >
                        <path d="M12 1.99988C17.5228 1.99988 22 6.47703 22 11.9999C22 17.5227 17.5228 21.9999 12 21.9999C6.47715 21.9999 2 17.5227 2 11.9999C2 9.98412 2.59925 8.10896 3.625 6.53894L2.29297 5.20691C2.00697 4.92091 1.92139 4.49074 2.07617 4.11707C2.23098 3.74346 2.59558 3.49988 3 3.49988H7C7.55228 3.49988 8 3.94759 8 4.49988V8.49988C8 8.90429 7.75641 9.26889 7.38281 9.42371C7.00914 9.57849 6.57897 9.49291 6.29297 9.20691L5.07715 7.99109C4.39285 9.17015 4 10.5387 4 11.9999C4 16.4182 7.58172 19.9999 12 19.9999C16.4183 19.9999 20 16.4182 20 11.9999C20 7.5816 16.4183 3.99988 12 3.99988C11.4477 3.99988 11 3.55216 11 2.99988C11 2.44759 11.4477 1.99988 12 1.99988Z" />
                    </svg>
                }
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
            {time > 0 &&
                <div className='flex gap-clamp-10 text-light200 leading-[0.7] justify-center items-center'>
                    <p >
                        Resend OTP After
                    </p>
                    <Timer time={time} setTime={setTime} />
                    <p>
                        Second
                    </p>
                </div>
            }
        </div>
    )
}

export default Resend