import Link from "next/link"
import Address from "./utilies/Address"
import Head from "../utilies/Head"

function SavedAddress({ address }) {

    return (
        <div className="flex flex-col gap-clamp-40">
            <div className="flex justify-between">
                <Head head={"Saved Address"} slogan={"View and Add your addresses for fast and easy checkout across our marketplaces"}/>
                <div className='w-fit'>
                    <Link href={"/profile/address/add"} className='secondary-btn whitespace-nowrap shrink-0 !w-fit !leading-[1.2]'>
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-clamp-24 h-clamp-24" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M12 5C12.5523 5 13 5.44772 13 6V11H18C18.5523 11 19 11.4477 19 12C19 12.5523 18.5523 13 18 13H13V18C13 18.5523 12.5523 19 12 19C11.4477 19 11 18.5523 11 18V13H6C5.44772 13 5 12.5523 5 12C5 11.4477 5.44772 11 6 11H11V6C11 5.44772 11.4477 5 12 5Z" fill="#FEFEFE" />
                        </svg>
                        Add new address
                    </Link>
                </div>
            </div>

            <div data-aos="fade-up" className="flex flex-col gap-clamp-40">
                {address?.data && address?.data?.length > 0 && address?.data?.map((item, index) => (
                    <Address key={item?.id} {...item}/>
                ))}
            </div>
        </div>
    )
}

export default SavedAddress