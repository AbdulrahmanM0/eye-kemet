import React from 'react'

function Head({head,slogan,className}) {
    return (
        <div className="sm:col-span-2 flex flex-col gap-clamp-24">
            <h3 data-aos="fade-up" className={`text-clamp-32 3xl:text-clamp-36 text-light400 uppercase font-bold leading-none ${className}`}>
                {head}
            </h3>
            <p data-aos="fade-up" className="text-clamp-16 3xl:text-clamp-18 text-gray200 leading-none">
                {slogan}
            </p>
        </div>
    )
}

export default Head