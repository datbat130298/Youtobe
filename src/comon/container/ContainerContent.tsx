import { useCallback, useEffect, useMemo, useState } from "react";
// import { getData } from "../../services/apiServices";
import VideoItem from "./VideoItem";
import ButtonFilter from "./ButtonFilter";
import { getTrendingService } from "../../services/apiServices";

const ContainerContent = () => {
  const [dataTrending, setDataTrending] = useState([]);


  const fetchData = useCallback(async () => {
    try {
      const response = await getTrendingService();
      setDataTrending(response.data)
    } catch (error) {
      console.error(error);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const filter = useMemo(() => {
    return ["Tất cả", "Âm nhạc", "Danh sách kết hợp", "Trò chơi", "Trực tiếp"];
  }, []);

  return (
    <div className="flex-1 overflow-auto ">
      <div className="w-full flex gap-2">
        {filter.map((item) => (
          <ButtonFilter title={item} key={item} />
        ))}
      </div>
      <div className="mt-6 flex flex-wrap justify-between gap-4">
      {
        dataTrending.length !== 0 && dataTrending.map((data) => <VideoItem data={data}/>)
      }
      </div>
    </div>
  );
};

export default ContainerContent;
