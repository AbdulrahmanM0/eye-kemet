import handleOrderDetails from '@/api/proflie/OrderDetails';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

export const fetchOrderDetails = createAsyncThunk(
  'orders/fetchOrderDetails',
  async (id, thunkAPI) => {
    try {
      const res = await handleOrderDetails(id);
      return res.data;
    } catch (err) {
      console.error("Error fetching order details", err);
      toast.error(err.response?.data || "Failed to fetch order details");
      return thunkAPI.rejectWithValue(err.response?.data || "Failed to fetch order details");
    }
  }
);

const initialState = {
  orders: [],
  orderDetails: null,
  loading: false,
  error: null,
};

const ordersSlice = createSlice({
  name: 'orders',
  initialState,
  reducers: {
    resetOrderDetails: (state) => {
      state.orderDetails = null;
      state.error = null;
      state.loading = false;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchOrderDetails.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchOrderDetails.fulfilled, (state, action) => {
        state.loading = false;
        state.orderDetails = action.payload;
      })
      .addCase(fetchOrderDetails.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  }
});

export const { resetOrderDetails } = ordersSlice.actions;
export default ordersSlice.reducer;