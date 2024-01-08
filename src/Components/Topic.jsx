const Topic = ({ img, text }) => {
  return (
    <div className='container flex flex-row p-3'>
      <img src={img} alt={text} />
      <p>{text}</p>
    </div>
  );
};

export default Topic;
