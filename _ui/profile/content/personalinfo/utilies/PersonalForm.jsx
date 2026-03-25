import Form from "./Form"

function PersonalForm({ profile }) {
    return (
        <div className='p-clamp-64 flex flex-col gap-clamp-20 border-gray400 border w-[clamp(320,65.52vw,1258px)]'>
            <div className="sm:col-span-2 flex flex-col gap-clamp-24 mb-clamp-30">
                <h3 className='text-clamp-36 text-light400 uppercase font-bold leading-none' data-aos="fade-up">
                    Edit Account
                </h3>
                <p className="text-clamp-18 text-gray200 leading-none" data-aos="fade-up">
                    Edit your personal information
                </p>
            </div>
            <Form {...profile} />
        </div>
    )
}

export default PersonalForm