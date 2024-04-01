import { IoIosSearch } from "react-icons/io";

const InputSearch = () => {
  return (
    <div className="flex items-center border-px border-gray-700 bg-black rounded-xl h-5 overflow-hidden text-gray-200">
      <input
        className="h-2 px-2 text-[10px] outline-none bg-inherit "
        placeholder="Tìm kiếm"
      />
      <div className="w-9 h-full bg-[#24252A] flex items-center justify-center ">
        <IoIosSearch size={10} />
      </div>
    </div>
  );
};

export default InputSearch;
