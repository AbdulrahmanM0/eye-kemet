import React from 'react'

function AddressForm() {
    return (
        <section className='grid grid-cols-1 sm:grid-cols-2 gap-clamp-20'>
            <div className="sm:col-span-2 flex flex-col gap-clamp-24">
                <h3 className='text-clamp-36 text-light400 uppercase font-bold leading-none'>
                    Your address
                </h3>
                <p className="text-clamp-18 text-gray200 leading-none">
                    Fill the requirement data below
                </p>
            </div>

            {/* label  */}
            <div className='sm:col-span-2'>
                <input className='input' placeholder='FLabel *' type="text" />
            </div>
            {/* addressss  */}
            <div className='sm:col-span-2'>
                <input className='input' placeholder='Address *' type="text" />
            </div>
            {/* city  */}
            <div>
                <input className='input' placeholder='City *' type="text" />
            </div>
            {/* country  */}
            <div>
                <input className='input' placeholder='Country *' type="text" />
            </div>
            {/* building  */}
            <div className='sm:col-span-2'>
                <input className='input' placeholder='Building number *' type="text" />
            </div>

            {/* apartment * */}
            <div>
                <input className='input' placeholder='Apartment number *' type="text" />
            </div>

            {/* floor  */}
            <div>
                <input className='input' placeholder='Floor number *' type="text" />
            </div>

        </section>
    )
}

export default AddressForm