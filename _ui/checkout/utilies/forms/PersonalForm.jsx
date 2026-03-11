
function PersonalForm() {
    return (
        <section className='grid grid-cols-1 sm:grid-cols-2 gap-clamp-20'>
            <div className="sm:col-span-2 flex flex-col gap-clamp-24">
                <h3 className='text-clamp-36 text-light400 uppercase font-bold leading-none'>
                    Personal info
                </h3>
                <p className="text-clamp-18 text-gray200 leading-none">
                    Fill the requirement data below
                </p>
            </div>

            <div>
                <input className='input' placeholder='Full name *' type="text" />
            </div>
            <div>
                <input className='input' placeholder='Enter email *' type="text" />
            </div>
            <div className='sm:col-span-2'>
                <input className='input' placeholder='Enter mobile number  *' type="text" />
            </div>
        </section>
    )
}

export default PersonalForm