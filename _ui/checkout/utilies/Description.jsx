"use client"
import Link from 'next/link'
import Image from "next/image";
import PersonalForm from "./forms/PersonalForm";
import AddressForm from "./forms/AddressForm";
import PaymentMethod from "./forms/PaymentMethod";

function Description() {

    return (
        <div className='flex flex-col gap-clamp-40'>
            {/* navigation */}
            <div className='flex gap-clamp-14 text-clamp-16 leading-[0.7] text-gray200'>
                <Link href={"/"}>Home</Link><span>/</span><Link href={"/products"}>Cart</Link><span>/</span><span className='text-light400 whitespace-nowrap'>Ckeckout</span>
            </div>

            {/* title  */}
            <div>
                <h3 className='text-clamp-64 text-light400 uppercase font-bold leading-none'>
                    Checkout
                </h3>
            </div>

            <p className="text-clamp-18 text-gray200 leading-[0.7]">
                1 items order
            </p>

            {/* products  */}
            <div>
                <div className="py-clamp-32 flex gap-clamp-24 flex-wrap border-b border-b-gray400">
                    {/* product img  */}
                    <div>
                        <Image src="/images/products/prod1.png" width={132} height={132} className="bg-[#101010] w-[clamp(100px,6.875vw,132px)] h-[clamp(100px,6.875vw,132px)]" alt="product image" />
                    </div>
                    {/* product details */}
                    <div className="justify-center flex flex-1 flex-col gap-clamp-20">
                        {/* title  */}
                        <h4 className="text-light400 text-clamp-28 font-bold uppercase leading-[0.7]">
                            Ring Waterdrop
                        </h4>

                        {/* categories  */}
                        <div className='flex gap-clamp-24'>
                            <p className='text-clamp-16 text-gray200 leading-[0.7]'>
                                Pure Gold
                            </p>
                            <p className='text-clamp-16 text-gray200 leading-[0.7]'>
                                24K
                            </p>
                            <p className='text-clamp-16 text-gray200 leading-[0.7]'>
                                Round
                            </p>
                        </div>

                        <div className="flex flex-wrap gap-clamp-20">
                            <div className="text-light400 text-clamp-18">
                                Quantity: 1
                            </div>
                            {/* eye picture  */}
                            <div className="flex gap-clamp-14">
                                <Image src="/images/bannars/eye.png" width={24} height={24} alt="user eye picture" />
                                {/* user name  */}
                                <div className="text-light400 text-clamp-18">
                                    Iris Blueprinted
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* price and descounnts  */}
                    <div className="flex flex-col gap-clamp-24 items-end justify-center">
                        <h6 className="text-clamp-28 text-gold100 uppercase font-bold leading-[0.7]">
                            EGP 2,700
                        </h6>
                        <p className="text-green100 text-clamp-16 leading-[0.7] whtespace-nowrap">
                            You save : EGP 10,000
                        </p>
                    </div>
                </div>
            </div>

            {/* personal info  */}
            <PersonalForm />
            {/* address info  */}
            <AddressForm />
            {/* payment method  */}
            <PaymentMethod />
        </div>
    )
}

export default Description