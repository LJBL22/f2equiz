import { useDispatch } from 'react-redux';
import { chooseIcon, chooseTitle } from '../store';

const Topic = ({ img, text }) => {
  const dispatch = useDispatch();
  const setTopic = () => {
    //change state
    dispatch(chooseTitle(text));
    dispatch(chooseIcon(img));
  };
  return (
    <div
      className='container flex flex-row p-3 cursor-pointer'
      onClick={setTopic}
    >
      <img src={img} alt={text} />
      <p>{text}</p>
    </div>
  );
};

export default Topic;
