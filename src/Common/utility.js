import axios from 'axios';

const jsonServerUrl = 'http://localhost:3000/quizzes'

export const getQuiz = async () => {
  try {
    const res = await axios.get(jsonServerUrl)
    const data = res?.data
    return data
  } catch (error) {
    console.error(`fail to get quiz${error}`);
  }
}