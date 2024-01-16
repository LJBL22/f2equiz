import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Button from '../Components/Button';
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
  const navigate = useNavigate();

  const [isAnswered, setIsAnswered] = useState(true);
  const [isSubmitted, setIsSubmitted] = useState(false); // true 就會出現綠色勾勾 兩個狀態綁在一起
  const [borderEffect, setBorderEffect] = useState(
    'focus:shadow-[0_0_0_2px_#A729F5_inset]'
  );

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
    if (isSubmitted) return; //讓查看答案的時候不能再選擇 （未來想想 DISABLE 的規劃會不會更好）
    dispatch(chooseAnswer(option));
    setIsAnswered(true);
  };

  const handleSubmit = () => {
    if (selectedAnswer === '') {
      setIsAnswered(false);
      return;
    }

    if (selectedAnswer === correctAnswer) {
      setBorderEffect(
        'shadow-[0_0_0_2px_#26D782_inset] [&>div]:bg-green [&>div]:text-pure-white'
      );
      dispatch(updateScore());
    } else if (selectedAnswer !== correctAnswer) {
      setBorderEffect(
        'shadow-[0_0_0_2px_#EE5454_inset] [&>div]:bg-red [&>div]:text-pure-white'
      );
    }

    setIsSubmitted(!isSubmitted);
  };

  const handleNextMove = () => {
    if (index === 9) {
      navigate('/result');
      return;
    }
    dispatch(updateIndex());
    dispatch(chooseAnswer(''));
    setIsSubmitted(!isSubmitted);
    setBorderEffect('focus:shadow-[0_0_0_2px_#A729F5_inset]');
  };

  const renderedOptions = options.map((option, i) => {
    return (
      <button
        className={`flex flex-row items-center w-full p-3 font-medium text-lg tablet:text-2xl rounded-xl bg-pure-white ${
          isSubmitted
            ? 'pointer-events-none'
            : `[&>div]:hover:text-purple [&>div]:hover:bg-[#E6E7FF] [&>div]:focus:text-pure-white [&>div]:focus:bg-purple`
        } ${option === selectedAnswer && borderEffect}`}
        key={option}
        onClick={() => handleSetAnswer(option)}
      >
        <div className='inline-block w-10 h-10 tablet:w-14 tablet:h-14 leading-10 tablet:leading-[56px] rounded-md mr-4 tablet:mr-8 text-navy-grey bg-light-grey'>
          {String.fromCharCode(65 + i)}
        </div>
        <span className='inline-block  font-medium text-left flex-1'>
          {option}
        </span>
        {isSubmitted && option === correctAnswer && (
          <img
            className='w-7 tablet:w-8'
            src='./icon-correct.svg'
            alt='icon-correct'
          />
        )}
        {isSubmitted &&
          option === selectedAnswer &&
          option !== correctAnswer && (
            <img className='w-7' src='./icon-error.svg' alt='icon-error' />
          )}
      </button>
    );
  });
  return (
    <>
      <section className='mt-8 mb-10 tablet:mt-0 tablet:mb-14'>
        <h4 className='text-sm tablet:text-xl italic mb-3 tablet:mb-7 text-navy-grey'>
          Question {index + 1} of {questions.length}
        </h4>
        <h2 className='text-xl tablet:text-4xl font-medium mb-6 tablet:mb-10'>
          {currentQuestion}
        </h2>
        <progress
          className='w-full h-4 p-1 rounded-full
          bg-pure-white [&::-moz-progress-bar]:bg-purple [&::-moz-progress-bar]:rounded-full
           [&::-webkit-progress-value]:bg-purple [&::-webkit-progress-value]:rounded-full 
           [&::-webkit-progress-bar]:bg-pure-white'
          value={index * 10}
          max='100'
        ></progress>
      </section>
      <section>
        <div className='space-y-3 tablet:space-y-6'>{renderedOptions}</div>
        <Button
          content={
            isSubmitted && index < 9
              ? 'Next Question'
              : isSubmitted
              ? 'Finished'
              : 'Submit Answer'
          }
          onClick={isSubmitted ? handleNextMove : handleSubmit}
        />
        {!isAnswered && (
          <p className='text-red flex flex-row items-center justify-center'>
            <img
              className='w-6 tablet:w-10 mr-2'
              src='./icon-error.svg'
              alt='icon-error'
            />
            <span className='inline-block text-md tablet:text-2xl'>
              Please select an answer
            </span>
          </p>
        )}
      </section>
    </>
  );
};

export default Quiz;
