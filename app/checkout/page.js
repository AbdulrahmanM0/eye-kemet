
import Checkout from '@/_ui/checkout/Checkout'
import { getSessionToken } from '@/api/authinticated';
import handleOrders from '@/api/proflie/Orders';
import handleProfile from '@/api/proflie/Profile';

async function Product({ searchParams }) {
  const { customer } = await getSessionToken();
  const getorders = await handleOrders({ path: "get-customer-orders" });
  // const address = await handleAllAddress({ method: "get" });
  const { extraction_id } = searchParams;

  return (
    <div>
      <Checkout customer={JSON.parse(customer?.value)} getorders={getorders} extraction_id={extraction_id}  />
    </div>
  )
}

export default Product
