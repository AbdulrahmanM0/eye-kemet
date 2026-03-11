import React from 'react'

function Content() {
    return (
        <div className='flex flex-col gap-clamp-40 lg:w-[clamp(300px,29.1667vw,560px)]'>
            <h6 className='text-balance text-clamp-18 leading-[0.7]'>
                Our Story
            </h6>
            <h3 className='text-balance uppercase font-bold text-clamp-64 leading-none'>
                We <br /> photograph <br /> your  <br /> unique eye
            </h3>
            <p className='text-gray200 text-clamp-18 '>
                Welcome to Eye Kemet, where we unveil the captivating world of iris artistry!
            </p>
            <p className='text-gray200 text-clamp-18 '>
                At Eye Kemet, we transform your iris into personalized jewelry. Discover rings, necklaces, bracelets, and more, each reflecting your unique essence with artistry.
            </p>
            <p className='text-gray200 text-clamp-18 '>
                At Eye Kemet, we believe that every eye tells a story. Our skilled artisans capture the essence of your gaze, preserving its beauty in timeless jewelry. Each piece is a testament to your individuality, a wearable work of art that reflects your inner self.
            </p>
        </div>
    )
}

export default Content