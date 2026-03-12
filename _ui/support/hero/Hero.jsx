import SectionHead from '@/components/sections/SectionHead'

function Hero() {
    const data = {
        pagination: [
            {
                title: "Support",
                link: "/support"
            }
        ],
        title: "Customer Support"
    }
    return (
        <>
            <SectionHead data={data} />
        </>
    )
}

export default Hero