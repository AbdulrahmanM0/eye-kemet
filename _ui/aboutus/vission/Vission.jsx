import Bannar from "./utilies/Bannar"
import Content from "./utilies/Content"

function Vission() {
    return (
        <section>
            <div className='py-clamp-100 bg-full pr-clamp-100'>
                <div>
                    <div className="flex flex-wrap gap-clamp-100 md:justify-between justify-center">
                        <Bannar />
                        <Content />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Vission