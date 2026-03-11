import SectionHead from '@/components/sections/SectionHead'

function Hero() {
    const data = {
        pagination: [
            {
                title: "Blogs",
                link: "/blogs"
            },
            {
                title: "Blog Details",
                link: "/blogs/anyblogid"
            }
        ],
        title: "What to Do If You Don’t Have a Clear Picture of Someone’s Eye"
    }
    return (
        <>
            <SectionHead data={data} />
        </>
    )
}

export default Hero