const Button = ({ onClick, content }) => {
  return (
    <button
      className='w-full p-3 items-center font-medium text-lg tablet:text-2xl bg-purple rounded-xl text-pure-white hover:opacity-50 my-3 tablet:my-8'
      onClick={onClick}
    >
      {content}
    </button>
  );
};

export default Button;
