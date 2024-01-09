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
      <div key={option}>
        <span>{String.fromCharCode(65 + i)}</span>
        <span>{option}</span>
      </div>
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
        onClick={() => setIsSubmitted(!isSubmitted)}
      />
    </div>
  );
};

export default Quiz;
