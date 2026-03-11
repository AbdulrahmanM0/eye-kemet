import SectionHead from '@/components/sections/SectionHead'

function Hero() {
    const data = {
        pagination: [
            {
                title: "Blogs",
                link: "/blogs"
            }
        ],
        title: "The Journal"
    }
    return (
        <>
            <SectionHead data={data} />
        </>
    )
}

export default Hero