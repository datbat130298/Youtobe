import { ShortDataType } from "../../types/DataTypes";

interface ShortItemProps {
  data: ShortDataType;
}

const ShortItem = ({ data }: ShortItemProps) => {
  return (
    <div className="col-span-1 shrink-0">
      <img
        src={data.thumbnail[0].url}
        alt="short"
        className="w-full h-[450px] rounded-lg"
      />
      <div className="mt-2">
        <p className="font-bold text-white line-clamp-2 text-sm">
          {data.title}
        </p>
        <p className="text-gray-400 text-xs">{data.viewCountText}</p>
      </div>
    </div>
  );
};

export default ShortItem;
