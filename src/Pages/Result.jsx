import { useNavigate } from 'react-router-dom';
import Button from '../Components/Button';
import { useDispatch, useSelector } from 'react-redux';
import { resetQuiz } from '../store';
import Topic from '../Components/Topic';

const Result = () => {
  const { quizIcon, quizTitle } = useSelector((state) => state.menu);
  const { questions, score } = useSelector((state) => state.quiz);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleReset = () => {
    dispatch(resetQuiz());
    navigate('/');
  };
  return (
    <>
      <section>
        <h1 className='text-4xl mt-4 mb-10'>
          <span className='font-light'>Quiz completed</span>
          <br />
          <span className='font-medium'>You scored...</span>
        </h1>
      </section>
      <section>
        <div className='space-y-3'>
          <div className='bg-pure-white w-full p-8 rounded-xl text-center'>
            <Topic
              isBtn={false}
              img={quizIcon}
              text={quizTitle}
              children='justify-center mb-4'
            />
            <div className='space-y-4'>
              <p className='font-medium text-[5.5rem] leading-none'>{score}</p>
              <p className='text-navy-grey text-lg font-thin'>
                out of {questions.length}
              </p>
            </div>
          </div>
          <Button content='Play Again' onClick={handleReset} />
        </div>
      </section>
    </>
  );
};

export default Result;
