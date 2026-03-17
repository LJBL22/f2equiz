import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface QuizQuestion {
  question: string;
  options: string[];
  answer: string;
}

interface QuizState {
  index: number;
  questions: QuizQuestion[];
  selectedAnswer: string;
  correctAnswer: string;
  score: number;
}

const quizSlice = createSlice({
  name: 'quiz',
  initialState: {
    index: 0,
    questions: [],
    selectedAnswer: '',
    correctAnswer: '',
    score: 0,
  } as QuizState,
  reducers: {
    setQuestions(state, action: PayloadAction<QuizQuestion[]>) {
      state.questions = action.payload
    },
    setCorrectAnswer(state, action: PayloadAction<string>) {
      state.correctAnswer = action.payload
    },
    chooseAnswer(state, action: PayloadAction<string>) {
      state.selectedAnswer = action.payload
    },
    // 按第一次 submit
    updateScore(state) {
      state.score++;
    },
    // 按第二次 submit
    updateIndex(state) {
      state.index++;
    },
    // play again
    resetQuiz(state) {
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
