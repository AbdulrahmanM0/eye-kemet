import handleCampaigns from '@/api/campaigns/campaigns';
import { cart, toggle } from '@/store/features/cart/cartSlice'
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'


function useCart() {
    const { cartItems, subTotal, total, discount } = useSelector((state) => state.cartReducer);
    const [capaigns, setCampaigns] = useState([])

    const dispatch = useDispatch();

    const handleCartToggle = () => {
        dispatch(toggle())
    }

    useEffect(() => {
        const formData = {
            quantity: 1,
        }
        dispatch(cart({ method: "get", formData }))


        // deliver data 
        async function getComapigns() {
            const handeCampaigns = await handleCampaigns();
            setCampaigns(handeCampaigns)
        }
        getComapigns()
    }, [])

    const handleRemoveItem = ({ item_id }) => {
        const formData = {
            item_id
        }
        dispatch(cart({ method: "remove", formData }))
    }
    const handleUpdateItem = ({ item_id, quantity }) => {
        const formData = {
            item_id,
            quantity
        }
        dispatch(cart({ method: "update", formData }))
    }

    const handleClearCart = () => {
        dispatch(cart({ method: "clear" }))
    }

    return {
        handleCartToggle, cartItems, subTotal, total, discount, handleRemoveItem, handleUpdateItem, handleClearCart, capaigns
    }
}

export default useCart