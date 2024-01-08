import { configureStore } from "@reduxjs/toolkit";
import { menuReducer, changeTitle } from "./slices/menuSlice";
import { quizReducer, updateCorrectNum, changeCurrentQuestionIndex } from "./slices/quizSlice";


const store = configureStore({
  reducer: {
    menu: menuReducer,
    quiz: quizReducer,
  }
})

export { store, changeTitle, updateCorrectNum, changeCurrentQuestionIndex } // export action creators