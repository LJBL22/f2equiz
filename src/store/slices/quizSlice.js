import { createSlice } from "@reduxjs/toolkit";

const quizSlice = createSlice({
  name: 'quiz',
  initialState: {
    currentTopic: '', // 端看傳入何 // 如何設計傳入？ useEffect? 不需要保存這個 state?
    currentQuestionIndex: 0, //currentTopic.questions[0]
    correctNum: 0,
  },
  reducers: {
    // 按第一次 submit
    updateCorrectNum(state, action) {
      if (action.payload) {
        state.correctNum += 1
      }
    },
    // 按第二次 submit
    changeCurrentQuestionIndex(state, action) {
      state.currentQuestionIndex += 1;
    }
  },
})

export const { changeCurrentQuestionIndex, updateCorrectNum } = quizSlice.actions;
export const quizReducer = quizSlice.reducer;