import { MdRestore } from "react-icons/md";

interface SeachHistoryItemProps {
  data: string;
}

const SeachHistoryItem = ({ data }: SeachHistoryItemProps) => {
  return (
    <div className="flex items-center h-6 justify-between text-gray-200 gap-1">
      <MdRestore size={10} className="text-gray-400" />
      <p className="text-[8px] flex-1">{data}</p>
      <div
        className="text-blue-700 font-medium text-[7px]"
        role="button"
        tabIndex={0}
        onClick={() => null}
      >
        Xóa
      </div>
    </div>
  );
};

export default SeachHistoryItem;
