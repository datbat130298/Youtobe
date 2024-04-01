import { GrMenu } from "react-icons/gr";

const ToggleSidebar = () => {
  return (
    <div
      className="rounded-full hover:bg-gray-700 text-white my-auto h-5 w-5 flex items-center justify-center "
      role="button"
      tabIndex={0}
      onClick={() => null}
    >
      <GrMenu size={12} className="mb-px" />
    </div>
  );
};

export default ToggleSidebar;
