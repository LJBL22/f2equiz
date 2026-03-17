import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { resetQuiz } from "./quizSlice";
import type { QuizQuestion } from "./quizSlice";

export interface QuizData {
  title: string;
  icon: string;
  questions: QuizQuestion[];
}

interface MenuState {
  quizTitle: string;
  quizIcon: string;
  quizzes: QuizData[];
  theme: string | null;
}

const menuSlice = createSlice({
  name: 'menu',
  initialState: {
    quizTitle: '',
    quizIcon: '',
    quizzes: [],
    theme: null,
  } as MenuState,
  reducers: {
    chooseTitle(state, action: PayloadAction<string>) {
      state.quizTitle = action.payload
    },
    chooseIcon(state, action: PayloadAction<string>) {
      state.quizIcon = action.payload
    },
    setQuiz(state, action: PayloadAction<QuizData[]>) {
      state.quizzes = action.payload
    },
    setTheme(state, action: PayloadAction<string | null>) {
      state.theme = action.payload
    }
  },
  extraReducers(builder) {
    builder.addCase(resetQuiz, (state) => {
      state.quizTitle = '';
      state.quizIcon = '';
    })
  }
})

export const { chooseTitle, chooseIcon, setQuiz, setTheme } = menuSlice.actions;
export const menuReducer = menuSlice.reducer;
