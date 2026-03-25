import Link from "next/link"
import Form from "./utilies/Form"
import Head from "../utilies/Head"

function BuildAddress({ head, slogan ,address = {},method = "post"}) {
    return (
        <div> <Link href={"/profile/address"} className="group flex uppercase items-center mb-clamp-40 text-clamp-18 text-balance font-bold ">
            <svg xmlns="http://www.w3.org/2000/svg" className="group-hover:-translate-x-2 duration-300 w-clamp-36 h-clamp-36" width="36" height="36" viewBox="0 0 36 36" fill="none">
                <path d="M20.2929 9.79293C20.5789 9.50695 21.0091 9.42136 21.3827 9.57614C21.7563 9.73094 21.9999 10.0956 21.9999 10.5V25.5C21.9999 25.9044 21.7563 26.269 21.3827 26.4238C21.0091 26.5786 20.5789 26.493 20.2929 26.207L12.7929 18.707C12.4024 18.3165 12.4024 17.6835 12.7929 17.2929L20.2929 9.79293Z" fill="#BC904D" />
            </svg>
            Back
        </Link>
            <div className='p-clamp-64 flex flex-col gap-clamp-20 border-gray400 border'>
                <div>
                    <Head head={head} slogan={slogan} className={"text-clamp-60 3xl:text-clamp-64"} />
                </div>

                <div data-aos="fade-up" className="flex flex-col gap-clamp-40">
                    <Form address={address} method={method}/>
                </div>
            </div>
        </div>

    )
}

export default BuildAddress