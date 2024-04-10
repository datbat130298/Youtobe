import { MdRestore } from "react-icons/md";

interface SeachHistoryItemProps {
  data: string;
}

const SeachHistoryItem = ({ data }: SeachHistoryItemProps) => {
  return (
    <div className="flex items-center px-1 py-1 justify-between text-gray-200 gap-3">
      <MdRestore size={16} className="text-gray-400" />
      <p className="text-sm flex-1">{data}</p>
      <div
        className="text-blue-700 font-medium text-sm"
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
