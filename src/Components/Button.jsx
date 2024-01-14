const Button = ({ onClick, content }) => {
  return (
    <button
      className='w-full p-3 items-center font-medium text-lg bg-purple rounded-xl text-pure-white hover:opacity-50'
      onClick={onClick}
    >
      {content}
    </button>
  );
};

export default Button;
