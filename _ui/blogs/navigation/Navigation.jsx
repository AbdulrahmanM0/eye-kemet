import React from 'react'

function Navigation({active = 1}) {
    const navs = [
        {
            title: "All article",
            id: 1
        },
        {
            title: "Featured",
            id: 2
        },
        {
            title: "Events",
            id: 3
        },
        {
            title: "latest news",
            id: 4
        },
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