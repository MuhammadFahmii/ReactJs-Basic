import { createSlice } from "@reduxjs/toolkit";
const initialValue = {
  fullname: "",
  email: "",
  phone: 1,
  nationality: "",
  message: "",
};

const contactUsSlices = createSlice({
  name: "contactUs",
  initialState: {
    contactUs: initialValue,
  },
  reducers: {
    addContactUs: (state, action) => {
      const newData = action;
      state.contactUs = newData;
    },
  },
});

export const { addContactUs } = contactUsSlices.actions;
export default contactUsSlices.reducer;
