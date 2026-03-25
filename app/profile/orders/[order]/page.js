
import OrderTracking from "@/_ui/profile/content/orderHstory/Details";
import handleOrders from "@/api/proflie/Orders";

export default async function Profile({params}) {
  const getorder = await handleOrders({path: "get-customer-orders",params:`?order_id=${params?.order}`});
  const order = getorder?.orders[0];

  return (
    <OrderTracking {...order}/> 
  );
}
