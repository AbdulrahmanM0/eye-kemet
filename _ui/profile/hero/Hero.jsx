import SectionHead from '@/components/sections/SectionHead'
import Head from './utilies/Head'

function Hero({profile}) {
    const data = {
        pagination: [
            {
                title: profile?.name,
                link: "/profile"
            },
        ],
        title: "My Profile",
        img: "/images/bannars/profile.png"
    }
    return (
        <>
            <SectionHead data={data}>
                <Head profile={profile}/>
            </SectionHead>
        </>
    )
}

export default Hero