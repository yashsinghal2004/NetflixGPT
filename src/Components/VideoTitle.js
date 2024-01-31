const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-7/12  pt-10 md:pt-52 pl-10 absolute z-10 bg-gradient-to-r from-black md:w-screen aspect-video ">
      <div className="text-lg md:text-4xl font-bold text-white ">{title}</div>
      <p className=" hidden md:block pt-4 w-1/4 text-white">{overview}</p>
      <button className="bg-white text-black p-1 px-2 mb-32 md:p-4 md:px-10 mt-7 md:mt-4 hover:bg-opacity-70 rounded-md ">
        ▶Play
      </button>
      <button className="hidden md:inline-block bg-black text-white p-4 px-8 mt-4 ml-2 bg-opacity-50 hover:bg-opacity-10 rounded-lg ">
        More info
      </button>
    </div>
  );
};
export default VideoTitle;
