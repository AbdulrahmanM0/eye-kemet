import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  open: false,
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    toggle: (state) => {
      console.log(state, "state")
      state.open = !state.open
    },
  },
})

export const { toggle } = cartSlice.actions

export default cartSlice.reducer