import { createSlice } from "@reduxjs/toolkit";
import { resetQuiz } from "./quizSlice";

const menuSlice = createSlice({
  name: 'menu',
  initialState: {
    quizTitle: '',
    quizIcon: '',
    quizzes: [],
    theme: null,
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
    },
    setTheme(state, action) {
      state.theme = action.payload
    }
  },
  extraReducers(builder) {
    builder.addCase(resetQuiz, (state, action) => {
      state.quizTitle = '';
      state.quizIcon = '';
    })
  }
})

export const { chooseTitle, chooseIcon, setQuiz, setTheme } = menuSlice.actions;
export const menuReducer = menuSlice.reducer; // onc single combined reducer