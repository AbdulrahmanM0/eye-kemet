import Description from './utilies/Description'
import FormProvider from './utilies/forms/FormProvider'
import PaymentSummary from './utilies/PaymentSummary'

function Checkout({ profile, getorders, extraction_id , customer }) {
  const {name,email,phone} = customer;
  return (
    <section>
      <FormProvider name={name} email={email} phone={phone} extraction_id={extraction_id} getorders={getorders} customer={customer} />
    </section>
  )
}

export default Checkout