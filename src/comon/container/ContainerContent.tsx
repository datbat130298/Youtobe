import { useCallback, useEffect, useMemo, useState } from "react";
import { getData } from "../../services/apiServices";
import axios from "axios";
import VideoItem from "./VideoItem";
import ButtonFilter from "./ButtonFilter";

const ContainerContent = () => {
  const [, setData] = useState();

  const options = useMemo(() => {
    return {
      method: "GET",
      url: "https://youtube342.p.rapidapi.com/videos",
      params: {
        part: "snippet,contentDetails,statistics",
        id: "Ks-_Mh1QhMc",
        maxResults: "50",
      },
      headers: {
        "X-RapidAPI-Key": "36319421ebmsh3284b091ae66d9ep11ddeajsnb52e7d7c62d4",
        "X-RapidAPI-Host": "youtube342.p.rapidapi.com",
      },
    };
  }, []);

  const fetchData = useCallback(async () => {
    const dataRes = await getData();
    setData(dataRes);
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
      <div className="w-full flex gap-1">
        {filter.map((item) => (
          <ButtonFilter title={item} key={item} />
        ))}
      </div>
      <div className="mt-2">
        <VideoItem />
      </div>
    </div>
  );
};

export default ContainerContent;
