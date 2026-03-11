import DateType from './utilies/DateType'
import Pragraph from './utilies/Pragraph'

function Content() {
    const p = {
        title: "Where your eyes unlock wearable treasures",
        body: [
            "In the realm of ocular artistry, capturing the essence of an individual's gaze when clarity eludes us presents a unique challenge. At Eye Kemet, we believe that even without a crystal-clear image, the soul's reflection can be immortalized.",
            "Our artisans embark on a journey of discovery, meticulously piecing together fragments of memory, emotion, and whispered stories. Through a symphony of colors, textures, and light, they breathe life into the intangible, creating a portrait that transcends the limitations of sight.",
            "Each brushstroke is a testament to the power of imagination, a celebration of the unseen connections that bind us together. With unwavering dedication, we transform blurry visions into captivating masterpieces, forever preserving the enigmatic beauty of the human spirit."
        ]
    }
    return (
        <section>
            <div className='pt-[clamp(80px,8.333vw,160px)] flex flex-col gap-clamp-64 w-[clamp(320px,59.375vw,1140px)] mx-auto'>
                {/* date & type  */}
                <DateType />
                <Pragraph {...p} />
            </div>
        </section>
    )
}

export default Content