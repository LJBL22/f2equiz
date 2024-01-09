import { createSlice } from "@reduxjs/toolkit";

const menuSlice = createSlice({
  name: 'menu',
  initialState: {
    quizTitle: '',
    quizIcon: '',
    quizzes: [],
  },
  reducers: {
    chooseTitle(state, action) {
      state.quizTitle = action.payload //action.payload 會返回資訊、在此儲存至 state
    },
    chooseIcon(state, action) {
      state.quizIcon = action.payload
    },
    setQuiz(state, action) {
      state.quizzes = action.payload
      console.log(state.quizzes);
    }
  }
})

export const { chooseTitle, chooseIcon, setQuiz } = menuSlice.actions;
export const menuReducer = menuSlice.reducer; // onc single combined reducer