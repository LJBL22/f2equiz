import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { getQuiz } from '../utils/api';
import Topic from '../Components/Topic';
import { setQuiz, chooseIcon, chooseTitle } from '../store';

const Menu = () => {
  const { quizzes } = useSelector((state) => state.menu);
  const dispatch = useDispatch();
  const navigate = useNavigate();

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

  // refactor: from Topic to Menu (where take actions)
  const setTopic = (selectedTopic) => {
    dispatch(chooseTitle(selectedTopic.title));
    dispatch(chooseIcon(selectedTopic.icon));
    navigate(`/${selectedTopic.title}`);
  };

  const renderedTopics = quizzes.map((topic) => (
    <Topic
      key={topic.title}
      img={topic.icon}
      text={topic.title}
      isBtn={true}
      handleClick={() => setTopic(topic)}
    />
  ));

  return (
    <>
      <section>
        <h1 className='text-4xl my-4 desktop:mb-12 tablet:text-6xl desktop:text-[4rem]'>
          <span className='inline-block font-light tablet:mb-2'>
            Welcome to the
          </span>
          <br />
          <span className='font-medium'>Frontend Quiz!</span>
        </h1>
        <h4 className='text-sm tablet:text-xl italic mb-10 tablet:mb-16 text-title-sub'>
          Pick a subject to get started.
        </h4>
      </section>
      <section>
        <div className='space-y-3 tablet:space-y-6'>{renderedTopics}</div>
      </section>
    </>
  );
};

export default Menu;
