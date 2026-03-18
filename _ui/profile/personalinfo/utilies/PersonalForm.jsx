
function PersonalForm() {
    return (
        <section >
            <div className='p-clamp-64 grid grid-cols-1 sm:grid-cols-2 gap-clamp-20 border-gray400 border w-[clamp(320,65.52vw,1258px)]'>
                <div className="sm:col-span-2 flex flex-col gap-clamp-24">
                    <h3 className='text-clamp-36 text-light400 uppercase font-bold leading-none'>
                        Edit Account
                    </h3>
                    <p className="text-clamp-18 text-gray200 leading-none">
                        Edit your personal information
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
            </div>
        </section>
    )
}

export default PersonalForm