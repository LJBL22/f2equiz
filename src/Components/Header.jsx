import { useState } from 'react';
import Topic from './Topic';

const Header = () => {
  const [topic, setTopic] = useState('');
  return (
    <div className='container flex flex-row justify-between'>
      <Topic key={topic.title} img={topic.icon} text={topic.title} />
      <div>dark mode</div>
    </div>
  );
};

export default Header;
