import Link from 'next/link'

function Navigation() {
    return (
        <div className='flex justify-center gap-clamp-14 text-clamp-16 text-gray200 leading-[0.7]'>
            <Link href={"/"}>
                Home
            </Link>
            <span>
                /
            </span>
            <Link href={"#"}>
                Sign in
            </Link>
        </div>
    )
}

export default Navigation