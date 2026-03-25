"use client"
function ContactForm({ contactForm }) {
    console.log(contactForm, "contactForm")

    // resort fields
    const sortedForm = [...(contactForm || [])].sort(
        (a, b) => a.sort_order - b.sort_order
    );
    return (
        <section className='grid grid-cols-1 sm:grid-cols-2 gap-clamp-40'>
            {/* form head  */}
            <div className="sm:col-span-2 flex flex-col gap-clamp-24">
                <p className="text-clamp-18 text-gray200 leading-none">
                    Contact Form
                </p>
                <h3 className='text-clamp-18 text-light400 leading-none'>
                    Do you have any questions?
                </h3>
            </div>


            {/* form  */}
            <form action="" className="sm:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-clamp-24">
                {
                    sortedForm?.map((item, index) => (
                        <div key={index + item?.id} className={index === contactForm.length - 1 ? "sm:col-span-2" : ""}>
                            <input className='input' placeholder={`${item.placeholder} ${item.is_required && "*"}`} type={item.field_type} />
                        </div>
                    ))
                }
                {/* <div>
                    <input className='input' placeholder='Enter email *' type="text" />
                </div>
                <div>
                    <input className='input' placeholder='Enter mobile number  *' type="text" />
                </div>
                <div>
                    <input className='input' placeholder='Subject *' type="text" />
                </div>
                <div className="col-span-2">
                    <textarea className='input' name="" id="" cols="30" rows="10" placeholder="Enter your message *">

                    </textarea>
                </div> */}

                {/* submit btn  */}
                <div>
                    <div className='w-fit'>
                        <button className='secondary-btn whitespace-nowrap shrink-0 !w-fit'>
                            Send
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-clamp-24 h-clamp-24" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M20 18.4805H18V8.41406L6.70703 19.707L5.29297 18.293L16.5859 7H6.51953V5H19C19.5523 5 20 5.44772 20 6V18.4805Z" fill="#FEFEFE" />
                            </svg>
                        </button>
                    </div>
                </div>
            </form>
        </section>
    )
}

export default ContactForm