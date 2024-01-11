import { useDispatch, useSelector } from 'react-redux';
import Button from '../Components/Button';
import { useEffect, useState } from 'react';
import { setQuestions } from '../store';

const Quiz = () => {
  // Access states
  const { quizzes, quizTitle } = useSelector((state) => state.menu);
  const { questions, index } = useSelector((state) => state.quiz);
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
  }, [quizTitle, dispatch, selectedData]);

  const renderedOptions = options.map((option, i) => {
    return (
      <button
        className='w-full p-3 font-medium text-lg rounded-xl bg-pure-white flex flex-row items-center'
        key={option}
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
        <progress value={index * 10} max='100'></progress>
      </section>
      <section className='space-y-3'>
        {renderedOptions}
        <Button
          content={isSubmitted ? 'Next Question' : 'Submit Answer'}
          onClick={() => setIsSubmitted(!isSubmitted)}
        />
      </section>
    </>
  );
};

export default Quiz;
