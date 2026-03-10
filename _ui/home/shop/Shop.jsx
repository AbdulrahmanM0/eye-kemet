import React from 'react'
import Card from './utilies/Card'

export default function Shop() {
    const cards = [
        {
            icon: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                <path d="M29 23.335C28.9996 24.9915 27.6566 26.335 26 26.335H6C4.34336 26.335 3.00035 24.9915 3 23.335V13.001H29V23.335ZM9.33301 16.334C8.78098 16.3342 8.33318 16.782 8.33301 17.334C8.33301 17.8862 8.78087 18.3338 9.33301 18.334H13.333C13.8853 18.334 14.333 17.8863 14.333 17.334C14.3328 16.7818 13.8852 16.334 13.333 16.334H9.33301ZM28 5.66797C28.5523 5.66797 29 6.11568 29 6.66797V11.001H3V6.66797C3 6.11568 3.44772 5.66797 4 5.66797H28Z" fill="#AE7929" />
            </svg>,
            title: "Enjoy Hassle-free payments experience",
            body: "Accept all payment methods",

        },
        {
            icon: <svg xmlns="http://www.w3.org/2000/svg" width="29" height="18" viewBox="0 0 29 18" fill="none">
                <path d="M28.1705 9.46983C28.5605 9.69742 28.7501 10.1589 28.6324 10.5948C28.5144 11.0308 28.1182 11.3331 27.6666 11.3331L17.9996 11.3331L17.9996 17.0001C17.9996 17.3581 17.808 17.6889 17.4976 17.8673C17.1872 18.0455 16.8049 18.0447 16.4957 17.8644L0.495673 8.53037C0.105779 8.30264 -0.0831189 7.8413 0.0347354 7.40537C0.152878 6.96979 0.548217 6.66724 0.999579 6.66709L10.6666 6.66709L10.6666 1.0001C10.6667 0.642185 10.8581 0.311186 11.1685 0.132913C11.4789 -0.0452377 11.8613 -0.0443391 12.1705 0.135842L28.1705 9.46983Z" fill="#AE7929" />
            </svg>,
            title: "Best delivery service in Egypt",
            body: "Fastest shipping all over Cairo",

        },
    ]
    return (
        <section>
            <div className='px-[clamp(20px,5.208vw,100px)] bg-full'>
                <div className='py-[clamp(20px,5.208vw,100px)]'>
                    <div className='w-full h-full flex gap-clamp-72 flex-wrap md:flex-nowrap'>
                        {/* cards  */}
                        {cards.map((item, index) => (
                            <Card key={item.title + index} {...item} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
