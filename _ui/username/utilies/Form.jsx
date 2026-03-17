"use client"
import UseSubmit from '../hooks/UseSubmit';
import Resend from './Resend';

function Form({ phone,otp }) {
    const { onSubmit, register, handleSubmit, errors, isSubmitting } = UseSubmit({ phone ,otp })

    return (
        <form onSubmit={handleSubmit(onSubmit)} className='mt-clamp-48'>
            <div className='flex flex-col gap-clamp-24'>

                {/* name */}
                <div>
                    <input {...register("name")} name='name' type='text' className='input' placeholder='User name *' />
                    {errors.name && (
                        <p className="text-red100 text-clamp-18 mt-1">{errors?.name?.message}</p>
                    )}
                </div>

                {/* sign up btn  */}
                <div>
                    <button disabled={isSubmitting} className={`hover:bg-full border border-gold100 transition-all duration-300 ease-in-out bg-gold100 bg-gold100 h-clamp-56 flex gap-clamp-10 py-clamp-16 px-clamp-28 text-clamp-18 font-bold text-balance uppercase leading-[0.7] rounded-[2px] w-full text-center justify-center items-center uppercase`}>
                        continue
                        {
                            isSubmitting ?
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-clamp-24 h-clamp-24 fill-current text-balance animate-spin"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M12 1.99988C17.5228 1.99988 22 6.47703 22 11.9999C22 17.5227 17.5228 21.9999 12 21.9999C6.47715 21.9999 2 17.5227 2 11.9999C2 9.98412 2.59925 8.10896 3.625 6.53894L2.29297 5.20691C2.00697 4.92091 1.92139 4.49074 2.07617 4.11707C2.23098 3.74346 2.59558 3.49988 3 3.49988H7C7.55228 3.49988 8 3.94759 8 4.49988V8.49988C8 8.90429 7.75641 9.26889 7.38281 9.42371C7.00914 9.57849 6.57897 9.49291 6.29297 9.20691L5.07715 7.99109C4.39285 9.17015 4 10.5387 4 11.9999C4 16.4182 7.58172 19.9999 12 19.9999C16.4183 19.9999 20 16.4182 20 11.9999C20 7.5816 16.4183 3.99988 12 3.99988C11.4477 3.99988 11 3.55216 11 2.99988C11 2.44759 11.4477 1.99988 12 1.99988Z" />
                                </svg>
                                :
                                <svg className='text-clamp-24 w-clamp-24 h-clamp-24' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M19 3C19.5523 3 20 3.44772 20 4V18C20 19.6569 18.6569 21 17 21H9C8.44772 21 8 20.5523 8 20C8 19.4477 8.44772 19 9 19H17C17.5523 19 18 18.5523 18 18V5H9C8.44772 5 8 4.55228 8 4C8 3.44772 8.44772 3 9 3H19ZM11.6172 8.07617C11.9909 7.92139 12.421 8.00697 12.707 8.29297L15.707 11.293C16.0976 11.6835 16.0976 12.3165 15.707 12.707L12.707 15.707C12.421 15.993 11.9909 16.0786 11.6172 15.9238C11.2436 15.769 11 15.4044 11 15V13H5C4.44772 13 4 12.5523 4 12C4 11.4477 4.44772 11 5 11H11V9C11 8.59558 11.2436 8.23098 11.6172 8.07617Z" fill="#FEFEFE" />
                                </svg>
                        }
                    </button>
                </div>

                {/* create an account  */}
                <div className='flex flex-col gap-clamp-24'>
                    <p className='text-clamp-18 leading-[0.7] text-gray200 w-full text-center'>
                        Didn't get the OTP?
                    </p>
                    <Resend />
                </div>
            </div>
        </form>
    )
}

export default Form