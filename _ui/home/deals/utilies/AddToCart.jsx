"use client"

import PrimaryBtn from '@/components/btn/Primary'
import React from 'react'
function AddToCart() {
   
    const handleAddToCart = () => {
    }
    
    return (
        <div onClick={handleAddToCart} data-aos="fade-up" data-aos-duration="1000">
            <PrimaryBtn />
        </div>
    )
}

export default AddToCart