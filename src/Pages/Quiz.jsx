import { useDispatch, useSelector } from 'react-redux';
import Button from '../Components/Button';
import { useEffect, useState } from 'react';
import { setQuestions, chooseAnswer } from '../store';

const Quiz = () => {
  // Access states
  const { quizzes, quizTitle } = useSelector((state) => state.menu);
  const { questions, index, selectedAnswer } = useSelector(
    (state) => state.quiz
  );
  const selectedData = quizzes.find((item) => item.title === quizTitle);
  const dispatch = useDispatch();
  const [isSubmitted, setIsSubmitted] = useState(false);

  // 不太懂先後順序＠＠
  // 前面出現 questions undefined 無法讀取
  // 後才 useEffect 有就更新
  const currentQuestion = selectedData.questions[index].question;
  const options = selectedData.questions[index].options;
  const answer = selectedData.questions[index].answer;

  // Warning: Cannot update a component (`Header`) while rendering a different component (`Quiz`). To locate the bad setState() call inside `Quiz`, follow the stack trace as described in https://reactjs.org/link/setstate-in-render
  useEffect(() => {
    dispatch(setQuestions(selectedData?.questions));
  }, [quizTitle, dispatch, selectedData]);

  // console.js:213 Warning: Expected `onClick` listener to be a function, instead got a value of `object` type.
  // onClick 在一個 option 即選定答案、更新 state
  // const setAnswer = (option) => dispatch(chooseAnswer(option));

  const handleClick = () => {
    // 對答案 （取 answer、取 state: selectedAnswer)
    // console.log(selectedAnswer);
    // 更改 button 字樣
    setIsSubmitted(!isSubmitted);
  };
  const renderedOptions = options.map((option, i) => {
    return (
      <button key={option}>
        {/* <button key={option} onClick={setAnswer(option)}> */}
        <span>{String.fromCharCode(65 + i)}</span>
        <span>{option}</span>
      </button>
    );
  });
  return (
    <div>
      <p>
        Question {index + 1} of {questions.length}
      </p>
      <h2>{currentQuestion}</h2>
      <div>
        <progress value={index * 10} max='100'></progress>
      </div>
      {renderedOptions}
      <Button
        content={isSubmitted ? 'Next Question' : 'Submit Answer'}
        onClick={handleClick}
      />
    </div>
  );
};

export default Quiz;
