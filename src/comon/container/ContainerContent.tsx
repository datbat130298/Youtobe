import { useCallback, useEffect, useMemo, useState } from "react";
// import { getData } from "../../services/apiServices";
import VideoItem from "./VideoItem";
import ButtonFilter from "./ButtonFilter";
import { getHomeFeedService } from "../../services/apiServices";
import VideoSkeleton from "./VideoSkeleton";
import { DataTypeEnum } from "../../types/EnumData";
import { VideoDataType } from "../../types/DataTypes";

const ContainerContent = () => {
  const [dataTrending, setDataTrending] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await getHomeFeedService();

      setDataTrending(
        response?.data?.filter(
          (data: VideoDataType) => data.type === DataTypeEnum.VIDEO
        )
      );
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const filter = useMemo(() => {
    return ["Tất cả", "Âm nhạc", "Danh sách kết hợp", "Trò chơi", "Trực tiếp"];
  }, []);

  return (
    <div className="flex-1 overflow-auto h-[calc(100%-30px)]">
      <div className="w-full flex gap-2">
        {filter.map((item) => (
          <ButtonFilter title={item} key={item} />
        ))}
      </div>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {!isLoading &&
          dataTrending.length !== 0 &&
          dataTrending.map((data) => <VideoItem data={data} />)}
        {isLoading &&
          Array.from({ length: 12 }).map((_, key) => (
            <VideoSkeleton key={key} />
          ))}
      </div>
    </div>
  );
};

export default ContainerContent;
