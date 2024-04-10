import { useCallback, useEffect, useMemo } from "react";
// import { getData } from "../../services/apiServices";
import axios from "axios";
import VideoItem from "./VideoItem";
import ButtonFilter from "./ButtonFilter";

const ContainerContent = () => {
  // const [, setData] = useState();

  const options = useMemo(() => {
    return {
      method: "GET",
      url: "https://youtube-media-downloader.p.rapidapi.com/v2/playlist/videos",
      params: {
        playlistId: "PLeCdlPO-XhWFzEVynMsmosfdRsIZXhZi0",
      },
      headers: {
        "X-RapidAPI-Key": "36319421ebmsh3284b091ae66d9ep11ddeajsnb52e7d7c62d4",
        "X-RapidAPI-Host": "youtube-media-downloader.p.rapidapi.com",
      },
    };
  }, []);

  const fetchData = useCallback(async () => {
    try {
      const response = await axios.request(options);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  }, [options]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const filter = useMemo(() => {
    return ["Tất cả", "Âm nhạc", "Danh sách kết hợp", "Trò chơi", "Trực tiếp"];
  }, []);

  return (
    <div className="flex-1">
      <div className="w-full flex gap-2">
        {filter.map((item) => (
          <ButtonFilter title={item} key={item} />
        ))}
      </div>
      <div className="mt-6">
        <VideoItem />
      </div>
    </div>
  );
};

export default ContainerContent;
