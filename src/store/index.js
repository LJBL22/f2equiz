import { configureStore } from "@reduxjs/toolkit";
import { menuReducer, chooseTitle, chooseIcon, setQuiz } from "./slices/menuSlice";
import { quizReducer, setQuestions, chooseAnswer, updateIndex, updateScore } from "./slices/quizSlice";


const store = configureStore({
  reducer: {
    menu: menuReducer,
    quiz: quizReducer,
  }
})

export { store, chooseTitle, chooseIcon, setQuiz, setQuestions, chooseAnswer, updateIndex, updateScore } // export action creators