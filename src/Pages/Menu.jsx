import { useDispatch, useSelector } from 'react-redux';
import { getQuiz } from '../Common/utility';
import Topic from '../Components/Topic';
import { useEffect } from 'react';
import { setQuiz } from '../store';

const Menu = () => {
  // 儲存 quiz data 至狀態
  const { quizzes } = useSelector((state) => state.menu);
  const dispatch = useDispatch();
  useEffect(() => {
    const getQuizAsync = async () => {
      try {
        const data = await getQuiz();
        dispatch(setQuiz(data));
      } catch (error) {
        console.error(error);
      }
    };
    getQuizAsync();
  }, [dispatch]);

  // render 出四個 title
  const renderedTopics = quizzes.map((topic) => (
    <Topic key={topic.title} img={topic.icon} text={topic.title} isBtn={true} />
  ));

  return (
    <>
      <section>
        <h1 className='text-4xl my-4'>
          <span className='font-light'>Welcome to the </span>
          <br />
          <span className='font-medium'>Frontend Quiz!</span>
        </h1>
        <h4 className='text-sm italic mb-10 text-navy-grey'>
          Pick a subject to get started.
        </h4>
      </section>
      <section>
        <div className='space-y-3'>{renderedTopics}</div>
      </section>
    </>
  );
};

export default Menu;
