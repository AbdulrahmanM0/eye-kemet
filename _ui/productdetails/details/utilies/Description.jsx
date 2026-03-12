"use client"
import { useState } from "react"
import Cart from '@/components/cart/Cart'
import Link from 'next/link'

function Description() {
    const [openCart, setOpenCart] = useState(false);

    return (
        <div className='flex flex-col gap-clamp-30 3xl:gap-clamp-42'>
            {/* navigation */}
            <div className='flex gap-clamp-14 text-clamp-16 leading-[0.7] text-gray200'>
                <Link href={"/"}>Home</Link><span>/</span><Link href={"/products"}>Products</Link><span>/</span><span className='text-light400 whitespace-nowrap'>Ring Waterdrop</span>
            </div>

            {/* title  */}
            <div>
                <h3 className=' 2xl:text-clamp-64 text-light400 uppercase font-bold leading-none'>
                    Ring Waterdrop
                </h3>
            </div>

            {/* description  */}
            <div className='flex flex-col gap-clamp-20'>
                <h5 className='text-light200 uppercase font-bold text-clamp-16 leading-[0.7]'>
                    Description
                </h5>

                <p className='text-clamp-16 text-gray200 leading-'>
                    The Ring Waterdrop. A delicate dance of light and gold, this exquisite piece captures the essence of a single, perfect drop. A symbol of purity, renewal, and the quiet strength found in simplicity.
                </p>
            </div>

            {/* Features  */}
            <div className='flex flex-col gap-clamp-20'>
                <h5 className='text-light200 uppercase font-bold text-clamp-16 leading-[0.7]'>
                    Features
                </h5>

                <div className='flex gap-clamp-24'>
                    <p className='text-clamp-16 text-gray200 leading-'>
                        Pure Gold
                    </p>
                    <p className='text-clamp-16 text-gray200 leading-'>
                        24K
                    </p>
                    <p className='text-clamp-16 text-gray200 leading-'>
                        Round
                    </p>
                </div>
            </div>

            {/* Ring Size */}
            <div className='flex flex-col gap-clamp-20'>
                <h5 className='text-light200 uppercase font-bold text-clamp-16 leading-[0.7]'>
                    Features
                </h5>

                <div className='flex justify-between flex-wrap gap-clamp-32'>
                    <div className='flex gap-clamp-10 flex-wrap text-balance text-clamp-16'>
                        <div className='p-clamp-16 bg-gold100 border border-[#BC904D] w-[44px] h-[44px] rounded-[2px] flex items-center justify-center'>
                            15
                        </div>

                        <div className='p-clamp-16 border border-gray400 w-[44px] h-[44px] rounded-[2px] flex items-center justify-center'>
                            20
                        </div>

                        <div className='p-clamp-16 border border-gray400  w-[44px] h-[44px] rounded-[2px] flex items-center justify-center'>
                            30
                        </div>

                        <div className='p-clamp-16 border border-gray400  w-[44px] h-[44px] rounded-[2px] flex items-center justify-center'>
                            40
                        </div>

                    </div>

                    <div className='px-clamp-24 py-clamp-12 gap-clamp-10 flex border border-gold100 rounded-[2px] h-fit flex- items-center mt-auto'>
                        <svg xmlns="http://www.w3.org/2000/svg" className='w-clamp-16 h-clamp-16' width="18" height="18" viewBox="0 0 18 18" fill="none">
                            <path d="M10.5 1.25C10.7652 1.25 11.0195 1.35543 11.207 1.54297L14.957 5.29297C15.1446 5.48051 15.25 5.73478 15.25 6V13.75C15.25 15.4069 13.9069 16.75 12.25 16.75H5.75C4.09315 16.75 2.75 15.4069 2.75 13.75V2.25C2.75 1.69772 3.19772 1.25 3.75 1.25H10.5ZM6.75 11.75C6.19772 11.75 5.75 12.1977 5.75 12.75C5.75 13.3023 6.19772 13.75 6.75 13.75H11.25C11.8023 13.75 12.25 13.3023 12.25 12.75C12.25 12.1977 11.8023 11.75 11.25 11.75H6.75ZM6.75 8.75C6.19772 8.75 5.75 9.19772 5.75 9.75C5.75 10.3023 6.19772 10.75 6.75 10.75H11.25C11.8023 10.75 12.25 10.3023 12.25 9.75C12.25 9.19772 11.8023 8.75 11.25 8.75H6.75ZM10.75 5.75H12.5859L10.75 3.91406V5.75Z" fill="#FEFEFE" />
                        </svg>

                        <h6 className='text-clamp-16 font-bold uppercase leading-[0.7] text-balance'>
                            Size Guide
                        </h6>
                    </div>

                </div>
            </div>

            {/* Stock and price  */}
            <div className='flex justify-between flex-wrap gap-clamp-24'>
                <div className=''>
                    <h4 className='text-light400 font-bold text-clamp-28 leading-[0.7] mb-clamp-18'>
                        Start From:
                    </h4>
                    <span className='text-gold100 text-clamp-28 font-bold uppercase leading-[0.7]'>
                        2,800 - 5,500 EGP
                    </span>
                </div>

                <div className='px-clamp-20 py-clamp-16 bg-green200 flex items-center h-fit gap-clamp-14'>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M20 3.00098C20.5523 3.00098 21 3.44869 21 4.00098V18.001C21 19.6578 19.6569 21.001 18 21.001H6C4.34315 21.001 3 19.6578 3 18.001V4.00098C3 3.44869 3.44772 3.00098 4 3.00098H20ZM15.707 9.29297C15.3165 8.90248 14.6835 8.90248 14.293 9.29297L11 12.5859L9.70703 11.293C9.31651 10.9025 8.68349 10.9025 8.29297 11.293C7.90245 11.6835 7.90247 12.3165 8.29297 12.707L10.293 14.707C10.6835 15.0976 11.3165 15.0976 11.707 14.707L15.707 10.707C16.0975 10.3165 16.0975 9.68348 15.707 9.29297Z" fill="#40D465" />
                        </svg>
                    </div>
                    <p className='text-light400 text-clamp-18 leading-none'>
                        In Stock - Ships in 1-2 Days
                    </p>
                </div>
            </div>

            {/* add btn  */}
            <div>
                <button
                    onClick={() => setOpenCart(true)}
                    className="secondary-btn px-clamp-28 py-clamp-16"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M8.50977 19C9.33819 19 10.0098 19.6716 10.0098 20.5V20.5098C10.0098 21.3382 9.33819 22.0098 8.50977 22.0098H8.5C7.67157 22.0098 7 21.3382 7 20.5098V20.5C7 19.6716 7.67157 19 8.5 19H8.50977ZM17.5098 19C18.3382 19 19.0098 19.6716 19.0098 20.5V20.5098C19.0098 21.3382 18.3382 22.0098 17.5098 22.0098H17.5C16.6716 22.0098 16 21.3382 16 20.5098V20.5C16 19.6716 16.6716 19 17.5 19H17.5098ZM5 2C5.52239 2 5.95678 2.40207 5.99707 2.92285L6.15625 5H21C21.2844 5 21.5554 5.12109 21.7451 5.33301C21.9348 5.54493 22.0255 5.82768 21.9941 6.11035L21.1777 13.4551C21.0179 14.8936 19.8538 16.013 18.4102 16.1162L8.05566 16.8555C6.40951 16.9731 4.97733 15.7392 4.85059 14.0938L4.2334 6.07715L4.07422 4H3C2.44772 4 2 3.55228 2 3C2 2.44772 2.44772 2 3 2H5ZM13 8.5C12.4477 8.5 12 8.94772 12 9.5V10H11.5C10.9477 10 10.5 10.4477 10.5 11C10.5 11.5523 10.9477 12 11.5 12H12V12.5C12 13.0523 12.4477 13.5 13 13.5C13.5523 13.5 14 13.0523 14 12.5V12H14.5C15.0523 12 15.5 11.5523 15.5 11C15.5 10.4477 15.0523 10 14.5 10H14V9.5C14 8.94772 13.5523 8.5 13 8.5Z" fill="#FEFEFE" />
                    </svg>
                    Add to cart
                </button>
            </div>

            {/* help  */}
            <div className='flex justify-center items-center gap-clamp-24'>
                <p className='text-clamp-18 text-balance leadinng-[0.7]'>
                    Need Help ?
                </p>
                <span className='text-light400 font-bold leading-[0.7] text-clamp-18'>
                    01276189374
                </span>
            </div>

            {/* return  */}
            <div className='flex gap-clamp-30 justify-center items-center'>
                {/* return */}
                <div className='flex gap-clamp-16 '>
                    <svg xmlns="http://www.w3.org/2000/svg" className='w-clamp-24 h-clamp-24' width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M21 11C21.5523 11 22 11.4477 22 12C22 17.5228 17.5228 22 12 22C9.98405 22 8.10917 21.4 6.53906 20.374L5.20703 21.707C4.92103 21.993 4.49086 22.0786 4.11719 21.9238C3.74359 21.769 3.5 21.4044 3.5 21V17C3.5 16.4477 3.94772 16 4.5 16H8.5C8.90442 16 9.26902 16.2436 9.42383 16.6172C9.57861 16.9909 9.49303 17.421 9.20703 17.707L7.99121 18.9219C9.17037 19.6063 10.5387 20 12 20C16.4183 20 20 16.4183 20 12C20 11.4477 20.4477 11 21 11ZM12 2C14.0155 2 15.8901 2.59953 17.46 3.625L18.793 2.29297C19.079 2.00697 19.5091 1.92139 19.8828 2.07617C20.2564 2.23098 20.5 2.59558 20.5 3V7C20.5 7.55228 20.0523 8 19.5 8H15.5C15.0956 8 14.731 7.75641 14.5762 7.38281C14.4214 7.00914 14.507 6.57897 14.793 6.29297L16.0078 5.07715C14.8289 4.39312 13.4608 4 12 4C7.58172 4 4 7.58172 4 12C4 12.5523 3.55228 13 3 13C2.44772 13 2 12.5523 2 12C2 6.47715 6.47715 2 12 2Z" fill="#969696" />
                    </svg>
                    <span className='text-clamp-16 text-gray200'>
                        30 days free return
                    </span>
                </div>
                {/* year */}
                <div className='flex gap-clamp-16 '>
                    <svg xmlns="http://www.w3.org/2000/svg" className='w-clamp-24 h-clamp-24' width="16" height="22" viewBox="0 0 16 22" fill="none">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M5.62891 1.05567C6.82675 -0.351962 9.00031 -0.351816 10.1982 1.05567L10.2402 1.10547C10.4485 1.35025 10.7626 1.47991 11.083 1.4541L11.1475 1.44922C12.9898 1.3008 14.527 2.83736 14.3789 4.67969L14.373 4.74512C14.3473 5.0653 14.4771 5.37868 14.7217 5.58692L14.7715 5.62891C16.1793 6.8268 16.1793 9.00032 14.7715 10.1982L14.7217 10.2402C14.4769 10.4485 14.3472 10.7627 14.373 11.083L14.3789 11.1475C14.5061 12.7268 13.3945 14.0803 11.9141 14.3418V20.9141C11.9139 21.2826 11.7106 21.6209 11.3857 21.7949C11.0607 21.9689 10.6662 21.9505 10.3594 21.7461L7.91407 20.1152L5.46875 21.7461C5.16198 21.9505 4.76745 21.9688 4.44239 21.7949C4.11737 21.621 3.91419 21.2827 3.91407 20.9141V14.3418C2.43348 14.0806 1.32198 12.727 1.44922 11.1475L1.4541 11.083C1.47991 10.7626 1.35025 10.4485 1.10547 10.2402L1.05567 10.1982C-0.351816 9.00031 -0.351962 6.82675 1.05567 5.62891L1.10547 5.58692C1.3502 5.37867 1.47985 5.06542 1.4541 4.74512L1.44922 4.67969C1.30106 2.83748 2.83748 1.30106 4.67969 1.44922L4.74512 1.4541C5.06542 1.47985 5.37867 1.35021 5.58692 1.10547L5.62891 1.05567ZM9.91407 15.0615C8.78047 16.0808 7.04799 16.0812 5.91407 15.0625V19.0449L7.35938 18.082L7.48926 18.0078C7.80263 17.8609 8.17486 17.8861 8.46875 18.082L9.91407 19.0449V15.0615ZM10.6211 6.20703C10.2306 5.81651 9.59756 5.81651 9.20703 6.20703L6.91407 8.5L6.6211 8.20703C6.23057 7.81651 5.59756 7.81651 5.20703 8.20703C4.81651 8.59756 4.81651 9.23057 5.20703 9.6211L6.20703 10.6211C6.59758 11.0113 7.23067 11.0115 7.6211 10.6211L10.6211 7.6211C11.0115 7.23067 11.0113 6.59758 10.6211 6.20703Z" fill="#969696" />
                    </svg>
                    <span className='text-clamp-16 text-gray200'>
                        30 days free return
                    </span>
                </div>
            </div>


            <Cart open={openCart} setOpen={setOpenCart}/>
        </div>
    )
}

export default Description