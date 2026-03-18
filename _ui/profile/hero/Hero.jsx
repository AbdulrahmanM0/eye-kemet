import SectionHead from '@/components/sections/SectionHead'

function Hero() {
    const data = {
        pagination: [
            {
                title: "My Profile",
                link: "/profile"
            },
        ],
        title: "My Profile",
        img: "/images/bannars/profile.png"
    }
    return (
        <>
            <SectionHead data={data} />
        </>
    )
}

export default Hero