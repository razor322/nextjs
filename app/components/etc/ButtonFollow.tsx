const ButtonFollow = ({ children }: any) => {
  return (
    <>
      <button
        className="bg-gradient-to-r from-pink-500 to-yellow-500 text-white py-1 px-3 rounded-xl hover: from-indigo-500
hover:via-purple-500 
hover:to-pink-500"
      >
        {children}
      </button>
    </>
  );
};

export default ButtonFollow;

// from - indigo - 500 via - purple - 500 to - pink - 500

// from-pink-500 to-yellow-500

// hover: from - indigo - 500
// hover: via - purple - 500
// hover:  to - pink - 500
