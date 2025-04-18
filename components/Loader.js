const Loader = () => {
    return (
      <div className="flex justify-center items-center mb-10">
        <div className="flex space-x-2">
          <div className="bg-blue-500 h-10 w-1 animate-bounce delay-100"></div>
          <div className="bg-purple-400 h-10 w-1 animate-bounce delay-200"></div>
          <div className="bg-blue-500 h-10 w-1 animate-bounce delay-300"></div>
          <div className="bg-purple-400 h-10 w-1 animate-bounce delay-400"></div>
          <div className="bg-blue-500 h-10 w-1 animate-bounce delay-500"></div>
        </div>
        <style jsx>{`
          .animate-bounce {
            animation: bounce 1.2s infinite ease-in-out;
          }
          .delay-100 {
            animation-delay: 0.1s;
          }
          .delay-200 {
            animation-delay: 0.2s;
          }
          .delay-300 {
            animation-delay: 0.3s;
          }
          .delay-400 {
            animation-delay: 0.4s;
          }
          .delay-500 {
            animation-delay: 0.5s;
          }
        `}</style>
      </div>
    );
  };
  
  export default Loader;
  