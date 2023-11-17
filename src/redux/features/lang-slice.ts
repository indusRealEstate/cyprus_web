import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const lang = createSlice({
  name: "lang",
  initialState: "en",
  reducers: {
    changeLang: (lang, action) => {
      return action.payload;
    },
  },
});

export const { changeLang } = lang.actions;
export default lang.reducer;
