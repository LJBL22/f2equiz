import { getQuiz } from '../Common/utility';
import Topic from '../Components/Topic';

const data = await getQuiz();
const Menu = () => {
  // render 出四個 title
  const renderedTopics = data.map((topic) => (
    <Topic key={topic.title} img={topic.icon} text={topic.title} />
  ));

  return (
    <>
      <h1>Welcome to the Frontend Quiz!</h1>
      <h4>Pick a subject to get started.</h4>
      <ul>{renderedTopics}</ul>
    </>
  );
};

export default Menu;
