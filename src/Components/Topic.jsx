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

  const bgColors = {
    HTML: '#FFF1E9',
    CSS: '#E0FDEF',
    JavaScript: '#EBF0FF',
    Accessibility: '#F6E7FF',
  };

  const bgStyle = `bg-[${bgColors[text]}]`;

  return (
    <button
      className='flex flex-row p-3 cursor-pointer items-center bg-pure-white w-full rounded-xl'
      onClick={setTopic}
    >
      <img
        src={img}
        alt={text}
        className={`w-10 h-10 p-2 rounded-md  ${bgStyle} mr-4`}
      />
      <span className='inline-block text-lg'>{text}</span>
    </button>
  );
};

export default Topic;
