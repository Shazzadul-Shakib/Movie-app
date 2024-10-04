const Loader: React.FC = () => {
  return (
    <div className="flex items-center justify-center space-x-2">
      <div className="h-4 w-4 animate-bounce rounded-full bg-blue-500"></div>
      <div className="animation-delay-200 h-4 w-4 animate-bounce rounded-full bg-green-500"></div>
      <div className="animation-delay-400 h-4 w-4 animate-bounce rounded-full bg-red-500"></div>
    </div>
  );
};

export default Loader;
