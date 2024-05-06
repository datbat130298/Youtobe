import { useCallback, useEffect, useMemo, useRef, useState } from "react";
// import { getData } from "../../services/apiServices";
import VideoItem from "./VideoItem";
import ButtonFilter from "./ButtonFilter";
import { getHomeFeedService } from "../../services/apiServices";
import VideoSkeleton from "./VideoSkeleton";
import { DataTypeEnum } from "../../types/EnumData";
import {
  ShortDataType,
  ShortsListingDataType,
  VideoDataType,
} from "../../types/DataTypes";
import ShortItem from "./ShortItem";
import { twMerge } from "tailwind-merge";

const ContainerContent = () => {
  const [dataTrending, setDataTrending] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [dataShort, setDataShort] = useState<ShortsListingDataType | null>(
    null
  );
  const [isShowFullShort, setIsShowFfullShort] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);

  const fetchData = useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await getHomeFeedService();

      setDataTrending(
        response?.data?.filter(
          (data: VideoDataType | ShortDataType) =>
            data.type === DataTypeEnum.VIDEO
        )
      );
      setDataShort(
        response?.data?.find(
          (data: VideoDataType | ShortsListingDataType) =>
            data.type === DataTypeEnum.SHORTS_LISTING
        )
      );
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const handleClickMore = useCallback(() => {
    setIsShowFfullShort((prev) => !prev);
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const countSlice = useMemo(() => {
    if (containerRef.current) {
      const width = containerRef.current.clientWidth;
      console.log(width + 208);
      if (containerRef.current?.clientWidth + 208 > 1280) {
        return 8;
      }
      if (
        containerRef.current?.clientWidth + 208 < 1280 &&
        containerRef.current.clientWidth + 208 > 1024
      ) {
        return 6;
      }
      if (
        containerRef.current?.clientWidth + 208 < 1024 &&
        containerRef.current.clientWidth + 208 > 768
      ) {
        return 4;
      }
      if (
        containerRef.current?.clientWidth + 208 < 768 &&
        containerRef.current.clientWidth + 208 > 768
      ) {
        return 2;
      }
      return 2;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [containerRef.current]);
  console.log(countSlice);

  const filter = useMemo(() => {
    return ["Tất cả", "Âm nhạc", "Danh sách kết hợp", "Trò chơi", "Trực tiếp"];
  }, []);
  console.log(countSlice);

  return (
    <div
      className="flex-1 overflow-auto h-[calc(100%-30px)]"
      ref={containerRef}
    >
      <div className="w-full flex gap-2">
        {filter.map((item) => (
          <ButtonFilter title={item} key={item} />
        ))}
      </div>
      <div className="mt-6 grid  md:grid-cols-2 grid-flow-row auto-rows-fr grid-cols-1 grid-rows-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 overflow-hidden">
        {!isLoading &&
          dataTrending.length !== 0 &&
          dataTrending
            .slice(0, countSlice)
            .map((data) => <VideoItem data={data} />)}
        {isLoading &&
          Array.from({ length: 12 }).map((_, key) => (
            <VideoSkeleton key={key} />
          ))}
      </div>
      <div
        className={twMerge(
          "mt-6 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4",
          !isShowFullShort && "overflow-hidden h-[515px]"
        )}
      >
        {!isLoading &&
          dataShort !== null &&
          dataShort.data.map((shortItem, index) => {
            if (isShowFullShort) {
              return <ShortItem key={shortItem.videoId} data={shortItem} />;
            }
            if (!isShowFullShort && index <= 4) {
              return <ShortItem key={shortItem.videoId} data={shortItem} />;
            }
            return <></>;
          })}
      </div>
      <div className="w-full flex items-center justify-between">
        <div className="h-px flex-1 bg-gray-600" />
        <div
          className="rounded-full border border-gray-600 px-4 py-1 text-white text-sm"
          role="button"
          tabIndex={0}
          onClick={handleClickMore}
        >
          {!isShowFullShort ? "Xem thêm" : "Ẩn bớt"}
        </div>
        <div className="h-px flex-1 bg-gray-400" />
      </div>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {!isLoading &&
          dataTrending.length !== 0 &&
          dataTrending.slice(9).map((data) => <VideoItem data={data} />)}
        {isLoading &&
          Array.from({ length: 12 }).map((_, key) => (
            <VideoSkeleton key={key} />
          ))}
      </div>
    </div>
  );
};

export default ContainerContent;
