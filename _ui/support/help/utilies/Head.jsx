import React from 'react'

function Head() {
    return (
        <div className='flex flex-col gap-clamp-36'>
            <h6 className='text-balance text-clamp-18'>
                General - Frequently Asked Questions: <span className='text-gray200'>+20 Questions</span>
            </h6>
            <h3 className='text-light400 font-bold text-clamp-64 leading-[1.2] uppercase'>
                How may we help you?
            </h3>

            <p className='text-gray200 text-clamp-18 leading-[0.7]'>
                Search our help library
            </p>

            <div className="w-full max-w-[59.06%] relative">
                {/* icon */}
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-4.35-4.35M10 18a8 8 0 100-16 8 8 0 000 16z"
                    />
                </svg>

                {/* input */}
                <input
                    type="text"
                    placeholder="What are you looking for?"
                    className="
                        w-full
                        bg-wd600
                        border border-[#2a2a2a]
                        rounded-[4px]
                        pl-12
                        pr-clamp-20
                        py-clamp-16
                        text-light100
                        placeholder:text-gray-400
                        outline-none
                        focus:border-gray-500
                        transition-colors
                        "
                />
            </div>
        </div>
    )
}

export default Head