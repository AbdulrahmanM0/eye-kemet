import React from 'react'

function Navigation({active = 1}) {
    const navs = [
        {
            title: "Written Reviews",
            id: 1
        },
        {
            title: "Video Reviews",
            id: 2
        },
        {
            title: "Google Reviews",
            id: 3
        }
    ]
    return (
        <section className='hidden sm:block'>
            <div className='border-b border-b-gray400 bg-full text-balance flex justify-center'>
                {navs.map((item, index) => (
                    <div key={index + item.title} className={`p-clamp-32 leading-[0.7] text-clamp-18 uppercase font-bold whitespace-nowrap ${active === item.id ? "text-gold100 border-b border-b-gold100" : ""}`}>
                        {item.title}
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Navigation