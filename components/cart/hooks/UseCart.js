import handleCart from "@/api/cart/cart"

function UseCart() {
    const handleGetCart = async () => {
        const formData = {
            quantity: 1,
        }
        await handleCart({ method: "get", formData })
    }

    return { handleGetCart }
}

export default UseCart