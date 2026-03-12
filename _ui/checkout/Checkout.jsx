import Description from './utilies/Description'
import PaymentSummary from './utilies/PaymentSummary'

function Checkout() {
  return (
    <section>
      <div className='px-clamp-100 bg-full'>
        <div className='flex flex-wrap gap-clamp-100 justify-center'>

          {/* cols 1  */}
          <div className='py-clamp-100 flex-1'>
              <Description />
          </div>

          {/* cols 2 */}
          <div className='py-clamp-100 '>
            <PaymentSummary />
          </div>

        </div>
      </div>
    </section>
  )
}

export default Checkout