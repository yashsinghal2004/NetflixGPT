const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-56 pl-12 absolute z-10 bg-gradient-to-r from-black w-screen aspect-video">
      <div className="text-4xl font-bold text-white">{title}</div>
      <p className=" pt-4 w-1/4 text-white">{overview}</p>
      <button className="bg-white text-black p-4 px-10 mt-4 hover:bg-opacity-70 rounded-md ">
        ▶Play
      </button>
      <button className="bg-black text-white p-4 px-8 mt-4 ml-2 bg-opacity-50 hover:bg-opacity-10 rounded-lg">
        More info
      </button>
    </div>
  );
};
export default VideoTitle;
