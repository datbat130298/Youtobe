import { useCallback, useEffect, useMemo, useState } from "react";
import { useLocation } from "react-router-dom";
import { searchService } from "../../services/apiServices";
import _ from "lodash";
import VideoSkeleton from "./VideoSkeleton";
import VideoItem from "./VideoItem";
import { VideoContainerTypeEnum } from "../../types/EnumData";

const ResultConTainer = () => {
  const location = useLocation();
  const [result, setResult] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const searchParam = useMemo(() => {
    const params = new URLSearchParams(location.search);
    return params.get("search_params");
  }, [location.search]);
  const handleSearch = useCallback(async () => {
    setIsLoading(true);
    try {
      const data = await searchService({ query: searchParam || "" });
      console.log(data.data);

      setResult(data.data);
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  }, [searchParam]);

  useEffect(() => {
    handleSearch();
  }, [handleSearch]);
  return (
    <div className="w-full overflow-auto px-48 flex flex-col gap-4 h-[calc(100%-30px)]">
      {isLoading &&
        Array.from({ length: 5 }).map((_, key) => <VideoSkeleton key={key} />)}
      {!isLoading && _.isEmpty(result) && <div>rỗng</div>}
      {!isLoading &&
        !_.isEmpty(result) &&
        result.map((data) => (
          <VideoItem data={data} type={VideoContainerTypeEnum.ROW} />
        ))}
    </div>
  );
};
export default ResultConTainer;
