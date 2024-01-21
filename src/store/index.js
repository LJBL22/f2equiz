import { configureStore } from "@reduxjs/toolkit";
import { menuReducer, chooseTitle, chooseIcon, setQuiz, setTheme } from "./slices/menuSlice";
import { quizReducer, setQuestions, setCorrectAnswer, chooseAnswer, updateIndex, updateScore, resetQuiz } from "./slices/quizSlice";


const store = configureStore({
  reducer: {
    menu: menuReducer,
    quiz: quizReducer,
  }
})

export { store, chooseTitle, chooseIcon, setQuiz, setTheme, setQuestions, setCorrectAnswer, chooseAnswer, updateIndex, updateScore, resetQuiz } // export action creators