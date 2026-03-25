import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchOrderDetails, resetOrderDetails } from '@/redux/ordersSlice';

function useOrderDetails({ id }) {
  const dispatch = useDispatch();
  const { orderDetails, loading, error } = useSelector((state) => state.orders);

  useEffect(() => {
    if (!id) return;

    dispatch(fetchOrderDetails(id));

    return () => {
      dispatch(resetOrderDetails()); 
    };
  }, [id, dispatch]);

  return {orderDetails,loading}
}

export default useOrderDetails;