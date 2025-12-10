import { createSlice } from "@reduxjs/toolkit";

const bookingSlice = createSlice({
  name: "booking",
  initialState: {
    data: null,    
  },
  reducers: {
    setBookingData: (state, action) => {
      state.data = action.payload;
    },
    clearBookingData: (state) => {
      state.data = null;
    },
  },
});

export const { setBookingData, clearBookingData } = bookingSlice.actions;
export default bookingSlice.reducer;
