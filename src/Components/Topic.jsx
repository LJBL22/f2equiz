const Topic = ({ img, text, isBtn, handleClick, children }) => {
  const bgColors = {
    HTML: '#FFF1E9',
    CSS: '#E0FDEF',
    JavaScript: '#EBF0FF',
    Accessibility: '#F6E7FF',
  };

  const bgStyle = {
    backgroundColor: bgColors[text],
  };

  const onClickHandler = (event) => {
    handleClick(event);
  };

  const commonContent = (
    <>
      <img
        src={img}
        alt={text}
        className='w-10 h-10 tablet:w-14 tablet:h-14 p-2 rounded-md mr-4 tablet:mr-8'
        style={bgStyle}
      />
      <span className='inline-block text-lg tablet:text-2xl desktop:text-3xl font-medium'>
        {text}
      </span>
    </>
  );

  return (
    <>
      {isBtn ? (
        <button
          className='flex flex-row p-3 cursor-pointer items-center bg-box-bg w-full rounded-xl'
          onClick={onClickHandler}
        >
          {commonContent}
        </button>
      ) : (
        <div
          className={`flex flex-row items-center ${
            !text && 'invisible'
          } ${children}`}
        >
          {commonContent}
        </div>
      )}
    </>
  );
};

export default Topic;
