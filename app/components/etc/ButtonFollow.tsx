const ButtonFollow = ({ children }: any) => {
  return (
    <>
      <button className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white py-1 px-3 rounded-xl hover:from-pink-500 hover:to-yellow-500">
        {children}
      </button>
    </>
  );
};

export default ButtonFollow;
