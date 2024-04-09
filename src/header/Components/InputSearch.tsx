import { useCallback, useEffect, useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { twMerge } from "tailwind-merge";
import SearchHistoryDropdown from "./SearchHistoryDropdown";

const InputSearch = () => {
  const [searchValue, setSearchValue] = useState("");
  const [isShowFull, setIsShowFull] = useState(false);
  const handleChangeInput = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setSearchValue(e.target.value);
    },
    []
  );
  const handleFocusInput = useCallback(() => {
    setIsShowFull(true);
  }, []);
  const handleBlurInput = useCallback(() => {
    setIsShowFull(false);
  }, []);

  useEffect(() => {
    console.log(isShowFull);
  }, [isShowFull]);

  return (
    <div className="relative flex items-center border group border-gray-700 bg-black bg-opacity-40 rounded-xl h-5  text-gray-200">
      <div
        className={twMerge(
          "w-4 h-full bg-transparent items-center justify-end hidden",
          isShowFull && "flex"
        )}
      >
        <IoIosSearch size={10} />
      </div>
      <input
        onFocus={handleFocusInput}
        onBlur={handleBlurInput}
        className={twMerge(
          "h-2 px-2 text-xxs outline-none bg-transparent w-60 group",
          isShowFull && "pl-1"
        )}
        placeholder="Tìm kiếm"
        value={searchValue}
        onChange={handleChangeInput}
      />
      <div className="w-8 h-full bg-[#24252A] flex items-center justify-center rounded-r-xl">
        <IoIosSearch size={10} />
      </div>
      {isShowFull && <SearchHistoryDropdown />}
    </div>
  );
};

export default InputSearch;
