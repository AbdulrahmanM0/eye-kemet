import React from 'react'

function Pragraph({ title, content }) {
    return (
        <div className='flex flex-col gap-clamp-24'>
            {/* title  */}
            <h3 className='text-balance uppercase font-bold text-clamp-64 leading-[1.12]'>
                {title}
            </h3>

            {/* paragraphs  */}
            <div
                className="flex flex-col gap-clamp-30 text-gray200 text-clamp-18"
                dangerouslySetInnerHTML={{ __html: content || "" }}
            />
            {/* {body.map((item, index) => (
                    <p key={index + item[0]} className='text-gray200 text-clamp-18'>
                        {item}
                    </p>
                ))} */}

        </div>
    )
}

export default Pragraph