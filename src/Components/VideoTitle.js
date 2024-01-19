const VideoTitle=({title,overview})=>{
    return (
        <div className="pt-32 pl-8">
          <div className="text-3xl font-bold">{title}</div>
          <p className=" pt-4 w-1/4">{overview}</p>
          <button className="bg-black text-white p-4 px-8 mt-4 ">▶Play</button>
          <button className="bg-black text-white p-4 px-8 mt-4 ml-2">
            More info
          </button>
        </div>
      );
}
export default VideoTitle;