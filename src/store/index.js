import { configureStore } from "@reduxjs/toolkit";
import { menuReducer, chooseTitle, chooseIcon, setQuiz } from "./slices/menuSlice";
import { quizReducer, updateCorrectNum, changeCurrentQuestionIndex } from "./slices/quizSlice";


const store = configureStore({
  reducer: {
    menu: menuReducer,
    quiz: quizReducer,
  }
})

export { store, chooseTitle, chooseIcon, setQuiz, updateCorrectNum, changeCurrentQuestionIndex } // export action creators