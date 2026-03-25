import DateType from './utilies/DateType'
import Pragraph from './utilies/Pragraph'

function Content({ title, content, published_at,status }) {
    const p = {
        title,
        content
    }
    const date = new Date(published_at);
    const formatted = date.toLocaleString("en-GB", {
        day: "numeric",
        month: "long",
        year: "numeric",
    });

    return (
        <section>
            <div className='pt-[clamp(80px,8.333vw,160px)] flex flex-col gap-clamp-64 w-[clamp(320px,59.375vw,1140px)] mx-auto'>
                {/* date & type  */}
                <DateType formatted={formatted} status={status}/>
                <Pragraph {...p} />
            </div>
        </section>
    )
}

export default Content