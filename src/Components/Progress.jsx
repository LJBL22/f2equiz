import { useSelector } from 'react-redux';

const Progress = ({ isSubmitted }) => {
  // pass local state via prop
  const { index } = useSelector((state) => state.quiz); // pass global state via redux store
  return (
    <progress
      className='w-full h-4 p-1 rounded-full
          bg-box-bg [&::-moz-progress-bar]:bg-purple [&::-moz-progress-bar]:rounded-full
           [&::-webkit-progress-value]:bg-purple [&::-webkit-progress-value]:rounded-full 
           [&::-webkit-progress-bar]:bg-box-bg desktop:absolute desktop:bottom-6'
      value={isSubmitted ? (index + 1) * 10 : index * 10} // the progress bar effect
      max='100'
    ></progress>
  );
};

export default Progress;
