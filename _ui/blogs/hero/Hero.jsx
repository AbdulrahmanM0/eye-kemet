import SectionHead from '@/components/sections/SectionHead'

function Hero({slug,title}) {
    const data = {
        pagination: [
            {
                title: "Blogs",
                link: "/blogs"
            },
            {
                title: "Blog Details",
                link: `/blogs/${slug}`
            }
        ],
        title
    }
    return (
        <>
            <SectionHead data={data} />
        </>
    )
}

export default Hero