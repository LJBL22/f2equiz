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
import Progress from '../Components/Progress';

const Quiz = () => {
  const { quizzes, quizTitle } = useSelector((state) => state.menu);
  const { questions, index, selectedAnswer, correctAnswer } = useSelector(
    (state) => state.quiz
  );
  const selectedData = quizzes.find((item) => item.title === quizTitle);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [isAnswered, setIsAnswered] = useState(true);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [borderEffect, setBorderEffect] = useState(
    'focus:shadow-[0_0_0_2px_#A729F5_inset]'
  );

  // 這裡的目的只是『命名變數簡化程式碼』、沒有存在同步異步問題、勿搞混
  const currentQuestion = selectedData.questions[index].question;
  const options = selectedData.questions[index].options;
  const answer = selectedData.questions[index].answer;

  useEffect(() => {
    dispatch(setQuestions(selectedData?.questions));
    dispatch(setCorrectAnswer(answer));
  }, [answer, quizTitle, dispatch, selectedData]);

  const handleSetAnswer = (option) => {
    if (isSubmitted) return;
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
    if (index === questions.length - 1) {
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
        className={`flex flex-row items-center w-full p-3 font-medium text-lg tablet:text-2xl desktop:text-3xl rounded-xl bg-box-bg ${
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
            <img
              className='w-7 tablet:w-8'
              src='./icon-incorrect.svg'
              alt='icon-incorrect'
            />
          )}
      </button>
    );
  });
  return (
    <>
      <section className='mt-8 mb-10 tablet:mt-0 tablet:mb-14 desktop:max-h-[28.25rem] desktop:relative'>
        <h4 className='text-sm tablet:text-xl italic mb-3 tablet:mb-7 text-title-sub'>
          Question {index + 1} of {questions.length}
        </h4>
        <h2 className='text-xl tablet:text-4xl font-medium mb-6 tablet:mb-10'>
          {currentQuestion}
        </h2>
        <Progress isSubmitted={isSubmitted} />
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
        <p
          className={`text-error flex flex-row items-center justify-center ${
            isAnswered ? 'opacity-0' : 'opacity-100'
          }`}
        >
          <img
            className='w-6 tablet:w-10 mr-2'
            src='./icon-error.svg'
            alt='icon-error'
          />
          <span className='inline-block text-md tablet:text-2xl'>
            Please select an answer
          </span>
        </p>
      </section>
    </>
  );
};

export default Quiz;
