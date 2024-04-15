import { VideoDataType } from "../../types/DataTypes";

interface VideoItemProps {
  data: VideoDataType;
}

const VideoItem = ({ data }: VideoItemProps) => {
  const numberWithCommas = (x: number) => {
    if (x) {
      return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
    }
    return "";
  };
  return (
    <div className="col-span-1">
      <div className="relative">
        <img
          src={data.thumbnail?.[0].url}
          className="w-full h-40 rounded-md"
          alt="avatar"
        />
        {data?.lengthText && (
          <div className="absolute rounded-sm bg-black/80 text-gray-200 bottom-1 right-1 px-1 font-bold py-1">
            {data.lengthText}
          </div>
        )}
      </div>
      <div className="flex mt-2 gap-2">
        <div className="mt-0.5 overflow-hidden rounded-full object-center h-7 w-7 shrink-0">
          <img
            src={data.channelThumbnail?.[0].url}
            alt="avatar"
            className="w-full"
          />
        </div>
        <div className="flex flex-col text-xs text-white">
          <p className="line-clamp-2 font-semibold text-white text-sm">
            {data.title}
          </p>
          <p className="truncate text-xs text-gray-400">{data.channelTitle}</p>
          {data.viewCount && (
            <p className="truncate text-xs text-gray-400">{`${numberWithCommas(
              data.viewCount
            )} lượt xem`}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default VideoItem;
