import React from 'react'

function Navigation({active = 1}) {
    const navs = [
        {
            title: "General",
            id: 1
        },
        {
            title: "Account & Billing",
            id: 2
        },
        {
            title: "Orders",
            id: 3
        },
        {
            title: "Product",
            id: 4
        },
        {
            title: "Promotions",
            id: 5
        },
        {
            title: "Shipping",
            id: 6
        },
        {
            title: "Payments",
            id: 7
        },
        {
            title: "Security",
            id: 8
        },
        {
            title: "Legal",
            id: 9
        },
    ]
    return (
        <section className='hidden sm:block'>
            <div className=' bg-full text-balance flex justify-center'>
                {navs.map((item, index) => (
                    <div key={index + item.title} className={`p-clamp-32 leading-[0.7] text-clamp-18 uppercase font-bold whitespace-nowrap ${active === item.id ? "text-gold100" : ""}`}>
                        {item.title}
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Navigation