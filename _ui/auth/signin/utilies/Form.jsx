import React from 'react'
import PasswordInput from './PasswordInput'
import Secondary from '@/components/btn/Secondary'
import Link from 'next/link'

function Form() {
    return (
        <form className='mt-clamp-48'>
            <div className='flex flex-col gap-clamp-24'>
                {/* email  */}
                <div>
                    <input type='email' className='input' placeholder='Enter email address*' />
                </div>
                {/* password  */}
                <div>
                    <PasswordInput />
                </div>

                {/* rememver me & forget password  */}
                <div className='flex justify-between items-center gap-clamp-16'>
                    <div>
                        <label htmlFor="remember" className="flex items-center gap-3 cursor-pointer select-none">

                            {/* Hidden checkbox */}
                            <input
                                type="checkbox"
                                id="remember"
                                className="peer hidden"
                            />

                            {/* Custom box */}
                            <div className="h-clamp-24 w-clamp-24 border border-gray300 rounded 
                    flex items-center justify-center
                    transition-all duration-200
                    peer-checked:bg-gold100 peer-checked:border-black">

                                {/* Check icon */}

                                <svg className="transition-opacity duration-200 shrink-0" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M10.6678 3.66781C11.0583 3.27745 11.6914 3.27735 12.0818 3.66781C12.472 4.0583 12.4721 4.69141 12.0818 5.08187L6.53983 10.6239C6.35231 10.8113 6.09793 10.9168 5.8328 10.9168C5.56767 10.9168 5.31329 10.8113 5.12577 10.6239L2.50077 7.99886C2.11034 7.60842 2.1105 6.97533 2.50077 6.5848C2.8913 6.19429 3.52432 6.19426 3.91483 6.5848L5.8328 8.50277L10.6678 3.66781Z" fill="#292929" />
                                </svg>
                            </div>

                            <p className="text-clamp-18 text-gray100 leading-none">
                                Remember me
                            </p>

                        </label>
                    </div>

                    <Link href={"/signin/forgetpassword"} className='text-clamp-14 font-bold leading-[1.14] underline text-gold100 uppercase underline'>
                        Forgot Password
                    </Link>
                </div>

                {/* sign in btn  */}
                <div>
                    <button className='bg-gold100 h-clamp-56 flex gap-clamp-10 py-clamp-16 px-clamp-28 text-clamp-18 font-bold text-balance uppercase leading-[0.7] rounded-[2px] w-full text-center justify-center items-center uppercase'>
                        Sign in
                        <svg className='text-clamp-24 w-clamp-24 h-clamp-24' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M19 3C19.5523 3 20 3.44772 20 4V18C20 19.6569 18.6569 21 17 21H9C8.44772 21 8 20.5523 8 20C8 19.4477 8.44772 19 9 19H17C17.5523 19 18 18.5523 18 18V5H9C8.44772 5 8 4.55228 8 4C8 3.44772 8.44772 3 9 3H19ZM11.6172 8.07617C11.9909 7.92139 12.421 8.00697 12.707 8.29297L15.707 11.293C16.0976 11.6835 16.0976 12.3165 15.707 12.707L12.707 15.707C12.421 15.993 11.9909 16.0786 11.6172 15.9238C11.2436 15.769 11 15.4044 11 15V13H5C4.44772 13 4 12.5523 4 12C4 11.4477 4.44772 11 5 11H11V9C11 8.59558 11.2436 8.23098 11.6172 8.07617Z" fill="#FEFEFE" />
                        </svg>
                    </button>
                </div>

                {/* create an account  */}
                <div className='flex flex-col gap-clamp-24'>
                    <p className='text-clamp-18 leading-[0.7] text-gray200 w-full text-center'>
                        Do not have account?
                    </p>

                    <Link href={"/signup"} className='border border-gold100 h-clamp-56 flex gap-clamp-10 py-clamp-16 px-clamp-28 text-clamp-18 font-bold text-balance uppercase leading-[0.7] rounded-[2px] w-full text-center justify-center items-center uppercase'>
                        Create Account
                        <svg className='text-clamp-24 w-clamp-24 h-clamp-24' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M16 13C18.7614 13 21 15.2386 21 18C21 19.6569 19.6569 21 18 21H6C4.34315 21 3 19.6569 3 18C3 15.2386 5.23858 13 8 13H16ZM12 3C14.2091 3 16 4.79086 16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3Z" fill="#FEFEFE" />
                        </svg>
                    </Link>
                </div>
            </div>
        </form>
    )
}

export default Form