import { useCallback, useState } from "react";
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

  return (
    <div className="relative flex items-center border group border-gray-700 bg-black bg-opacity-40 rounded-full h-7  text-gray-200">
      <div
        className={twMerge(
          "w-8 h-full bg-transparent items-center justify-center hidden",
          isShowFull && "flex"
        )}
      >
        <IoIosSearch size={16} />
      </div>
      <input
        onFocus={handleFocusInput}
        onBlur={handleBlurInput}
        className={twMerge(
          "h-10 px-4 text-sm outline-none bg-transparent w-80 xl:w-96 group",
          isShowFull && "pl-1"
        )}
        placeholder="Tìm kiếm"
        value={searchValue}
        onChange={handleChangeInput}
      />
      <div className="w-12 h-full bg-[#24252A] flex items-center justify-center rounded-r-xl">
        <IoIosSearch size={18} />
      </div>
      {isShowFull && <SearchHistoryDropdown />}
    </div>
  );
};

export default InputSearch;
