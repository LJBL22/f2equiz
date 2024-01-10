import { configureStore } from "@reduxjs/toolkit";
import { menuReducer, chooseTitle, chooseIcon, setQuiz, setDarkMode } from "./slices/menuSlice";
import { quizReducer, setQuestions, chooseAnswer, updateIndex, updateScore } from "./slices/quizSlice";


const store = configureStore({
  reducer: {
    menu: menuReducer,
    quiz: quizReducer,
  }
})

export { store, chooseTitle, chooseIcon, setQuiz, setDarkMode, setQuestions, chooseAnswer, updateIndex, updateScore } // export action creators