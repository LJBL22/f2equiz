import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { chooseIcon, chooseTitle } from '../store';

const Topic = ({ img, text }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const setTopic = () => {
    //change state
    dispatch(chooseTitle(text));
    dispatch(chooseIcon(img));
    navigate(`/${text}`);
  };
  return (
    <button
      className='container flex flex-row p-3 cursor-pointer'
      onClick={setTopic}
    >
      <img src={img} alt={text} />
      <span>{text}</span>
    </button>
  );
};

export default Topic;
