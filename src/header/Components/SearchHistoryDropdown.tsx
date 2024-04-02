import SeachHistoryItem from "./SearchHistoryItem";

const SearchHistoryDropdown = () => {
  const data = [
    "da da da",
    "một đường nở hoa",
    "bông hpa đẹp nhất",
    "người tình mùa đông",
  ];
  console.log(1);
  return (
    <div className="absolute w-full z-10 top-5 px-1 bg-[#24252A] rounded-lg">
      {data.map((item) => (
        <SeachHistoryItem data={item} key={item} />
      ))}
    </div>
  );
};

export default SearchHistoryDropdown;
