import axios from 'axios';
import type { QuizData } from '../store/slices/menuSlice';

const jsonServerUrl = 'https://f2equiz-json.vercel.app/quizzes'

export const getQuiz = async (): Promise<QuizData[] | undefined> => {
  try {
    const res = await axios.get<QuizData[]>(jsonServerUrl)
    return res?.data
  } catch (error) {
    console.error(`fail to get quiz${error}`);
  }
}
