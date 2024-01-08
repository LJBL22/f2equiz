import { createSlice } from "@reduxjs/toolkit";

const menuSlice = createSlice({
  name: 'menu',
  initialState: {
    choseTitle: '',
  },
  reducers: {
    changeTitle(state, action) {
      state.choseTitle = action.payload //action.payload 會返回資訊、在此儲存至 state
    }
  }
})

export const { changeTitle } = menuSlice.actions;
export const menuReducer = menuSlice.reducer; // onc single combined reducer