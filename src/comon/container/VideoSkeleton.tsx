const VideoSkeleton = () => {
  return (
    <div className="flex flex-col gap-3 col-span-1 animate-pulse">
      <div className="h-40 w-full rounded-md bg-slate-700" />
      <div className="h-5 rounded-md w-full bg-slate-700" />
      <div className="h-5 rounded-md w-1/2 bg-slate-700" />
    </div>
  );
};
export default VideoSkeleton;
