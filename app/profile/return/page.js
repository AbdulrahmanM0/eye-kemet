
import OrederHistory from "@/_ui/profile/content/orderHstory/OrederHistory";
import handleOrders from "@/api/proflie/Orders";

export default async function Profile() {
  const orders = await handleOrders({ path: "get-orders",params: "?status=cancelled" });

  const data = {
    type: "return",
    head: {
      head: "Return & Exchange",
      slogan: "View your returns history or file a new return"
    }
  }

  return (
    <OrederHistory orders={orders} data={data}/>
  );
}
