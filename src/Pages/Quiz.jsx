import { useDispatch, useSelector } from 'react-redux';
import Button from '../Components/Button';
import { useEffect, useState } from 'react';
import {
  setQuestions,
  chooseAnswer,
  setCorrectAnswer,
  updateScore,
  updateIndex,
} from '../store';

const Quiz = () => {
  // Access states
  const { quizzes, quizTitle } = useSelector((state) => state.menu);
  const { questions, index, selectedAnswer, correctAnswer } = useSelector(
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

  useEffect(() => {
    dispatch(setQuestions(selectedData?.questions));
    dispatch(setCorrectAnswer(answer));
  }, [answer, quizTitle, dispatch, selectedData]);

  const handleSetAnswer = (option) => {
    dispatch(chooseAnswer(option));
  };

  const handleSubmit = () => {
    if (selectedAnswer === correctAnswer) {
      dispatch(updateScore());
    }
    setIsSubmitted(!isSubmitted);
  };

  const handleNextMove = () => {
    dispatch(updateIndex());
    setIsSubmitted(!isSubmitted);
  };
  const renderedOptions = options.map((option, i) => {
    return (
      <button
        className='w-full p-3 font-medium text-lg rounded-xl bg-pure-white flex flex-row items-center'
        key={option}
        onClick={() => handleSetAnswer(option)}
      >
        <div className='text-navy-grey bg-light-grey w-10 h-10 p-2 rounded-md inline-block mr-4'>
          {String.fromCharCode(65 + i)}
        </div>
        <span className='inline-block text-lg font-medium text-left'>
          {option}
        </span>
      </button>
    );
  });
  return (
    <>
      <section className='mb-10'>
        <h4 className='text-sm italic mb-3 text-navy-grey'>
          Question {index + 1} of {questions.length}
        </h4>
        <h2 className='text-xl font-medium mb-6'>{currentQuestion}</h2>
        <progress
          className='w-full h-4 p-1 rounded-full
          bg-pure-white [&::-moz-progress-bar]:bg-purple [&::-moz-progress-bar]:rounded-full
           [&::-webkit-progress-value]:bg-purple [&::-webkit-progress-value]:rounded-full 
           [&::-webkit-progress-bar]:bg-pure-white'
          value={index * 10}
          max='100'
        ></progress>
      </section>
      <section className='space-y-3'>
        {renderedOptions}
        <Button
          content={isSubmitted ? 'Next Question' : 'Submit Answer'}
          onClick={isSubmitted ? handleNextMove : handleSubmit}
        />
      </section>
    </>
  );
};

export default Quiz;
