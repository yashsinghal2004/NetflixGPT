const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-6/12  md:pt-56 pl-12 absolute z-10 bg-gradient-to-r from-black md:w-screen aspect-video ">
      <div className="text-xl md:text-4xl font-bold text-white">{title}</div>
      <p className=" hidden md:block pt-4 w-1/4 text-white">{overview}</p>
      <button className="bg-white text-black p-4 px-10 mt-8 md:mt-4 hover:bg-opacity-70 rounded-md ">
        ▶Play
      </button>
      <button className="bg-black text-white p-4 px-8 mt-8 md:mt-4 ml-[10%] md:ml-2 bg-opacity-50 hover:bg-opacity-10 rounded-lg ">
        More info
      </button>
    </div>
  );
};
export default VideoTitle;
