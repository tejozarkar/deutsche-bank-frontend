import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
   name: "user",
   initialState: {
      details: {},
      role: null,
   },
   reducers: {
      setUserDetails: (state, action) => {
         state.details = action.payload;
      },
      setUserRole: (state, action) => {
         state.role = action.payload;
      },
   },
});

export const { setUserDetails, setUserRole } = userSlice.actions;

export default userSlice.reducer;
