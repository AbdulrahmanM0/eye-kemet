import Accordion from "./utilies/Accordion"
import Ask from "./utilies/Ask"
import Head from "./utilies/Head"

function HelpSection() {
    return (
        <section>
            <div className='px-clamp-100 bg-full'>
                <div className='flex flex-wrap gap-clamp-100 justify-center'>

                    {/* cols 1  */}
                    <div className='py-clamp-100 flex-1 flex flex-col gap-clamp-36'>
                        <Head />
                        <Accordion/>
                    </div>

                    {/* cols 2 */}
                    <div className='py-clamp-100'>
                        <Ask />
                    </div>

                </div>
            </div>
        </section>
    )
}

export default HelpSection