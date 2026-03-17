import { toggle } from '@/store/features/cart/cartSlice'
import { useDispatch } from 'react-redux'

function useCart() {
    const dispatch = useDispatch();

    const handleCartToggle = () => {
        dispatch(toggle())
    }

    return {
        handleCartToggle
    }
}

export default useCart