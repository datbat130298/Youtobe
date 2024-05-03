import { twMerge } from "tailwind-merge";
import { VideoDataType } from "../../types/DataTypes";
import { VideoContainerTypeEnum } from "../../types/EnumData";

interface VideoItemProps {
  data: VideoDataType;
  className?: string;
  type?: VideoContainerTypeEnum;
}

const VideoItem = ({
  data,
  className,
  type = VideoContainerTypeEnum.COL,
}: VideoItemProps) => {
  const numberWithCommas = (x: number) => {
    if (x) {
      return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
    }
    return "";
  };
  console.log(data);
  return (
    <div
      className={twMerge(
        "col-span-1 flex flex-col",
        className,
        type === VideoContainerTypeEnum.ROW && "flex-row gap-6"
      )}
    >
      <div className="relative w-fit shrink-0">
        <img
          src={data.thumbnail?.[0].url}
          className={twMerge(
            "w-full h-40 rounded-md",
            type === VideoContainerTypeEnum.ROW && "h-56 shrink-0"
          )}
          alt="avatar"
        />
        {data?.lengthText && (
          <div className="absolute rounded-sm bg-black/80 text-gray-200 bottom-1 right-1 px-1 font-bold py-1">
            {data.lengthText}
          </div>
        )}
      </div>
      {type === VideoContainerTypeEnum.COL && (
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
            <p className="truncate text-xs text-gray-400">
              {data.channelTitle}
            </p>
            {data.viewCount && (
              <p className="truncate text-xs text-gray-400">{`${numberWithCommas(
                data.viewCount
              )} lượt xem`}</p>
            )}
          </div>
        </div>
      )}
      {type === VideoContainerTypeEnum.ROW && (
        <div className="flex flex-col gap-2">
          <p className="line-clamp-2 font-semibold text-white text-base">
            {data.title}
          </p>
          {data.viewCount && (
            <p className="truncate text-xs text-gray-400">{`${numberWithCommas(
              data.viewCount
            )} lượt xem`}</p>
          )}
          <div className="flex gap-2">
            <div className="overflow-hidden rounded-full object-center h-5 w-5 shrink-0">
              <img
                src={data.channelThumbnail?.[0].url}
                alt="avatar"
                className="w-full"
              />
            </div>
            <p className="truncate text-sm text-gray-400">
              {data.channelTitle}
            </p>
          </div>
          <p className="line-clamp-2 font-semibold text-gray-500 text-sm">
            {data.description}
          </p>
        </div>
      )}
    </div>
  );
};

export default VideoItem;
