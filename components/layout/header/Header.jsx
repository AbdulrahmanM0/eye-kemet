"use client"
import Image from 'next/image'
import Link from 'next/link';
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react';
import FullScreenDrawer from './utilies/Drawer';

function Header() {
    const pathname = usePathname();
    const [scrolled, setScrolled] = useState(false);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const header = document.getElementById("site-header");

        if (header) {
            document.documentElement.style.setProperty(
                "--header-height",
                `${header.offsetHeight}px`
            );
        }

        const handleScroll = () => {
            if (window.scrollY > 10) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const isSticky = scrolled || pathname !== "/";

    //   handle open drawer 
    const hanndleDrawer = () => {
        setOpen(!open)
    }

    return (
        <>
            <header
                id="site-header"
                className={`transition-colors duration-500 z-[400] w-full top-0 ${isSticky ? "sticky" : "absolute"
                    } ${(scrolled &&!open) ? "bg-full" : "bg-[#00000059]"}`}
            >
                <div className='px-clamp-40 sm:px-clamp-100 py-clamp-48 flex items-center justify-between'>
                    {/* menu */}
                    <div>
                        <button onClick={hanndleDrawer} className='flex gap-clamp-24 items-center w-fit sm:w-[clamp(100px,12.188vw,234px)]'>
                            {/* icon */}
                            <svg xmlns="http://www.w3.org/2000/svg" className='w-clamp-32 h-clamp-32' width="32" height="32" viewBox="0 0 32 32" fill="none">
                                <g clipPath="url(#clip0_667_842)">
                                    <path d="M-1 10L-1 8L33 8V10L-1 10Z" fill="#AE7929" />
                                    <path d="M-1 23L-1 21L33 21V23L-1 23Z" fill="#AE7929" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_667_842">
                                        <rect width="32" height="32" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>

                            {/* menu text */}
                            <div className='hidden sm:block text-clamp-18 text-gold100 uppercase font-bold leading-[0.7]'>
                                Menu
                            </div>
                        </button>
                    </div>

                    {/* logo */}
                    <Link href="/">
                        <Image src={"/images/logo.png"} className='w-[clamp(80px,9.844vw,189px)]' width={189} height={56} alt='eye kemet' />
                    </Link>

                    {/* signin & cart */}
                    <div className='flex gap-clamp-20 items-stretch'>
                        {/* cart */}
                        <div className='p-clamp-16 bg-full border border-gray400 rounded-[2px] flex items-center justify-center'>
                            <svg xmlns="http://www.w3.org/2000/svg" className='w-clamp-24 h-clamp-24' viewBox="0 0 24 24" fill="none">
                                <path d="M8.50977 19C9.33819 19 10.0098 19.6716 10.0098 20.5V20.5098C10.0098 21.3382 9.33819 22.0098 8.50977 22.0098H8.5C7.67157 22.0098 7 21.3382 7 20.5098V20.5C7 19.6716 7.67157 19 8.5 19H8.50977ZM17.5098 19C18.3382 19 19.0098 19.6716 19.0098 20.5V20.5098C19.0098 21.3382 18.3382 22.0098 17.5098 22.0098H17.5C16.6716 22.0098 16 21.3382 16 20.5098V20.5C16 19.6716 16.6716 19 17.5 19H17.5098ZM5 2C5.52239 2 5.95678 2.40207 5.99707 2.92285L6.15625 5H21C21.2844 5 21.5554 5.12109 21.7451 5.33301C21.9348 5.54493 22.0255 5.82768 21.9941 6.11035L21.1777 13.4551C21.0179 14.8936 19.8538 16.013 18.4102 16.1162L8.05566 16.8555C6.40951 16.9731 4.97733 15.7392 4.85059 14.0938L4.2334 6.07715L4.07422 4H3C2.44772 4 2 3.55228 2 3C2 2.44772 2.44772 2 3 2H5Z" fill="#AE7929" />
                            </svg>
                        </div>

                        {/* sign in */}
                        <div className='w-fit hidden sm:block'>
                            <button className='secondary-btn whitespace-nowrap shrink-0 !w-fit flex items-center justify-center h-full'>
                                Sign in
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M19 3C19.5523 3 20 3.44772 20 4V18C20 19.6569 18.6569 21 17 21H9C8.44772 21 8 20.5523 8 20C8 19.4477 8.44772 19 9 19H17C17.5523 19 18 18.5523 18 18V5H9C8.44772 5 8 4.55228 8 4C8 3.44772 8.44772 3 9 3H19ZM11.6172 8.07617C11.9909 7.92139 12.421 8.00697 12.707 8.29297L15.707 11.293C16.0976 11.6835 16.0976 12.3165 15.707 12.707L12.707 15.707C12.421 15.993 11.9909 16.0786 11.6172 15.9238C11.2436 15.769 11 15.4044 11 15V13H5C4.44772 13 4 12.5523 4 12C4 11.4477 4.44772 11 5 11H11V9C11 8.59558 11.2436 8.23098 11.6172 8.07617Z" fill="#FEFEFE" />
                                </svg>
                            </button>
                        </div>
                    </div> 
                </div>
            </header>

            {/* drawer  */}
            <FullScreenDrawer open={open} setOpen={setOpen}/>
        </>
    );
}

export default Header;