import Navigation from '@/components/items/navigation/Navigation'

function TermsSection() {
    const data = {
        pagination: [
            {
                title: "Terms & Conditions",
                link: "/terms"
            }
        ],
        title: "Terms & Conditions "
    }
    return (
        <section>
            <div className='bg-full overflow-hidden pb-clamp-100'>
                {/* navigation & title  */}
                <div className='p-clamp-60 text-center flex flex-col gap-clamp-40 border-b border-b-gray400'>
                    <Navigation {...data} />
                    <h4 className='text-light400 text-clamp-36 font-bold leading-none uppercase'>
                        {data?.title ? data.title : "Shop Now"}
                    </h4>
                </div>



                {/* contact data & form */}
                <div className='py-clamp-100 max-w-[clamp(320px,59.375vw,1140px)] mx-auto flex flex-col gap-clamp-40'>
                    {[1,2,3,4].map((item,index) => (
                    <div className='flex flex-col gap-clamp-24 3xl:gap-clamp-36'>
                        <h3 className='text-clamp-36 text-light400 font-bold uppercase leading-[1.2]'>
                            {index+1}. Usage Terms
                        </h3>
                        <p className='text-clamp-18 text-gray200'>
                            These terms define the rules for using the Eye Kemet website, www.eyekemet.com (“our site“).
                        </p>
                        <p className='text-clamp-18 text-gray200'>
                            Welcome to Eye Kemet. These terms govern your use of our website and services. By using our site, you agree to these terms. If you disagree, please do not use our website.
                        </p>
                        <p className='text-clamp-18 text-gray200'>
                            These terms define the rules for using the Eye Kemet website, www.eyekemet.com (“our site“).
                        </p>
                    </div>
                ))}
                </div>


            </div>
        </section>
    )
}

export default TermsSection