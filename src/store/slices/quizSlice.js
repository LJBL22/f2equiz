import { createSlice } from "@reduxjs/toolkit";

const quizSlice = createSlice({
  name: 'quiz',
  initialState: {
    index: 0,
    questions: [],
    selectedAnswer: '',
    correctAnswer: '',
    score: 0,
  },
  reducers: {
    setQuestions(state, action) {
      state.questions = action.payload
    },
    setCorrectAnswer(state, action) {
      state.correctAnswer = action.payload
    },
    chooseAnswer(state, action) {
      state.selectedAnswer = action.payload
    },
    // 按第一次 submit
    updateScore(state, action) {
      state.score++;
    },
    // 按第二次 submit
    updateIndex(state, action) {
      state.index++;
    },
    // play again
    resetQuiz(state, action) {
      state.index = 0;
      state.questions = [];
      state.selectedAnswer = '';
      state.correctAnswer = '';
      state.score = 0;
    }
  },
})

export const { setQuestions, setCorrectAnswer, chooseAnswer, updateIndex, updateScore, resetQuiz } = quizSlice.actions;
export const quizReducer = quizSlice.reducer;