import Image from "next/image"
import StarRating from "./Rating"

function Comment({ comment, auther, rate, date }) {


    return (
        <div className="relative p-clamp-48 flex flex-col gap-clamp-32 items bg-full group hover:bg-wd600 border border-gray400">
            {/* rate  */}
            <div className="flex items-center gap-clamp-14">
                <StarRating rating={3} />

                <span className="text-clamp-18 text-balance">
                    {rate}/5
                </span>
            </div>

            {/* commennt  */}
            <div>
                <p className="text-clamp-18 text-light400">
                    {comment}
                </p>
            </div>

            {/* auther */}
            <div className="flex gap-clamp-20">
                {/* img  */}
                <div className="shrink-0">
                    <Image src={`/images/user/user.png`} width={73} height={73} className="rounded-full object-cover w-clamp-72" alt={auther.name} />
                </div>
                {/* auther name  */}
                <div className="flex flex-1 flex-col justify-center items-center gap-clamp-14">
                    <h5 className="text-light400 text-clamp-18 font-bold uppercase">
                        {auther.name}
                    </h5>
                    <div className="text-clamp-20 text-gray200 leading-[0.7]">
                        {date}
                    </div>
                </div>
                {/* icon  */}
                <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-clamp-64 h-clamp-48 " width="66" height="47" viewBox="0 0 66 47" fill="none">
                        <path d="M12.0454 0.000456532C13.8148 0.000456687 15.7884 0.340716 17.9661 1.02125C20.1438 1.83789 22.0493 3.19896 23.6825 5.10445C25.3158 7.14605 26.1325 9.93623 26.1325 13.475C26.1325 16.7416 25.4519 20.2803 24.0909 24.0913C22.7298 27.9023 21.0285 31.7133 18.9869 35.5243C16.8092 39.4714 14.7676 43.0782 12.8621 46.3447L0.612477 40.0158C1.97354 37.5659 3.26655 34.9118 4.49151 32.0535C5.71647 29.3314 6.73727 26.8815 7.55391 24.7038C8.37054 22.6622 8.84692 21.2331 8.98303 20.4164C5.85258 19.5998 3.60682 18.3068 2.24576 16.5374C0.748586 14.9041 -9.11388e-07 13.1347 -7.44804e-07 11.2292C-4.83031e-07 8.2349 0.952745 5.58082 2.85824 3.267C4.76373 1.0893 7.82612 0.000456163 12.0454 0.000456532Z" fill="#2B2B2B" />
                        <path d="M51.1255 0.000456532C52.8949 0.000456687 54.8684 0.340716 57.0461 1.02125C59.2238 1.83789 61.1293 3.19896 62.7626 5.10445C64.3959 7.14605 65.2125 9.93623 65.2125 13.475C65.2125 16.7416 64.532 20.2803 63.1709 24.0913C61.8099 27.9023 60.1085 31.7133 58.0669 35.5243C55.8892 39.4714 53.8476 43.0782 51.9421 46.3447L39.6925 40.0158C41.0536 37.5659 42.3466 34.9118 43.5716 32.0535C44.7965 29.3314 45.8173 26.8815 46.634 24.7038C47.4506 22.6622 47.927 21.2331 48.0631 20.4164C44.9327 19.5998 42.6869 18.3068 41.3258 16.5374C39.8287 14.9041 39.0801 13.1347 39.0801 11.2292C39.0801 8.2349 40.0328 5.58082 41.9383 3.267C43.8438 1.0893 46.9062 0.000456163 51.1255 0.000456532Z" fill="#2B2B2B" />
                    </svg>
                </div>
            </div>

        </div>
    )
}

export default Comment