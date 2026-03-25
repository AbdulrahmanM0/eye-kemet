
import OrederHistory from "@/_ui/profile/content/orderHstory/OrederHistory";
import handleOrders from "@/api/proflie/Orders";

export default async function Profile() {
  const orders = await handleOrders({ path: "get-customer-orders" });
  const data = {
    type: "history",
    head: {
      head: "Order History",
      slogan: "Track and explore you orders"
    }
  }

  return (
    <OrederHistory orders={orders} data={data}/>
  );
}
