"use client"
import React from 'react'
import Dialog from './Dialog'
import UseRemoveAddress from '../hooks/UseRemoveAddress'

function Remove({id}) {
    const { dialog, handleDialog,handleSubmit , loading } = UseRemoveAddress();

    return (
        <>
            <button onClick={handleDialog} className='secondary-btn whitespace-nowrap shrink-0 !w-fit'>
                <svg xmlns="http://www.w3.org/2000/svg" className='w-clamp-16 3xl:w-clamp-18 h-clamp-16 3xl:h-clamp-18' width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <path d="M12 -1C12.3788 -1 12.7251 -0.78605 12.8945 -0.447266L14.6182 3H17C17.5523 3 18 3.44772 18 4C18 4.55228 17.5523 5 17 5H16V16C16 17.6569 14.6569 19 13 19H5C3.34315 19 2 17.6569 2 16V5H1C0.447715 5 0 4.55228 0 4C0 3.44772 0.447715 3 1 3H3.38184L5.10547 -0.447266L5.17676 -0.568359C5.36169 -0.836325 5.66854 -1 6 -1H12ZM7 7C6.44772 7 6 7.44771 6 8V14C6 14.5523 6.44772 15 7 15C7.55228 15 8 14.5523 8 14V8C8 7.44771 7.55228 7 7 7ZM11 7C10.4477 7 10 7.44771 10 8V14C10 14.5523 10.4477 15 11 15C11.5523 15 12 14.5523 12 14V8C12 7.44771 11.5523 7 11 7ZM5.61816 3H12.3818L11.3818 1H6.61816L5.61816 3Z" fill="#FEFEFE" />
                </svg>
                Remove
            </button>

            <Dialog dialog={dialog} handleDialog={handleDialog} id={id} handleSubmit={handleSubmit} loading={loading}/>
        </>
    )
}

export default Remove