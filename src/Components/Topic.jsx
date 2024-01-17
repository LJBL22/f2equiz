import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { chooseIcon, chooseTitle } from '../store';

const Topic = ({ img, text, isBtn, children }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const setTopic = () => {
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

  const bgStyle = {
    backgroundColor: bgColors[text],
  };

  return (
    <>
      {isBtn ? (
        <button
          className='flex flex-row p-3 cursor-pointer items-center bg-pure-white w-full rounded-xl'
          onClick={setTopic}
        >
          <img
            src={img}
            alt={text}
            className='w-10 h-10 tablet:w-14 tablet:h-14 p-2 rounded-md mr-4 tablet:mr-8'
            style={bgStyle}
          />
          <span className='inline-block text-lg tablet:text-2xl desktop:text-3xl font-medium'>
            {text}
          </span>
        </button>
      ) : (
        <div
          className={`flex flex-row items-center ${
            !text && 'invisible'
          } ${children}`}
        >
          <img
            src={img}
            alt={text}
            className='w-10 h-10 tablet:w-14 tablet:h-14 p-2 rounded-md mr-4 tablet:mr-8'
            style={bgStyle}
          />
          <span className='inline-block text-lg tablet:text-2xl desktop:text-3xl font-medium'>
            {text}
          </span>
        </div>
      )}
    </>
  );
};

export default Topic;
