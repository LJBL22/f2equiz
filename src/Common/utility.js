import axios from 'axios';

const jsonServerUrl = 'https://f2equiz-json-b9kxbti70-ljbl22s-projects.vercel.app/quizzes'

export const getQuiz = async () => {
  try {
    const res = await axios.get(jsonServerUrl)
    const data = res.data
    return data
  } catch (error) {
    console.error(`fail to get quiz${error}`);
  }
}