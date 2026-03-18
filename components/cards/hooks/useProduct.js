import { cart } from "@/store/features/cart/cartSlice";
import { useDispatch } from "react-redux"

function useProduct() {
    const dispatch = useDispatch();

    const handleAddToCart = async (id) => {
        const formData = {
            menu_item_id: id,
            quantity: 1,
        }
        await  dispatch(cart({method: "add", formData }))
    }
    return {handleAddToCart}
}

export default useProduct