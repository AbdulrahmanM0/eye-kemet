import { categoris } from "@/data/categories"
import Card from "./utilies/Card"
function Categories() {
  return (
    <section>
        <div className='w-full grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 justify-center'>
            {categoris.map((item,index) => (
              <Card key={index + item.title} {...item} />
            ))}
        </div>
    </section>
  )
}

export default Categories