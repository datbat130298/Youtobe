import { IoMdNotificationsOutline } from "react-icons/io";
import Avatar from "./Components/Avatar";
import InputSearch from "./Components/InputSearch";
import ToggleSidebar from "./Components/ToggleSidebar";
import { AiOutlineVideoCameraAdd } from "react-icons/ai";
import { FaYoutube } from "react-icons/fa";

const Header = () => {
  return (
    <div className="w-full h-10 px-5 flex items-center justify-between">
      <div className="h-full flex gap-2">
        <ToggleSidebar />
        <div className="flex items-center gap-0.5">
          <FaYoutube className="text-red-500" />
          <p className="text-xs font-bold text-white mb-px">YouTobe</p>
        </div>
      </div>
      <InputSearch />
      <div className="flex items-center gap-3 text-white">
        <AiOutlineVideoCameraAdd size={13} />
        <IoMdNotificationsOutline size={13} />

        <Avatar />
      </div>
    </div>
  );
};

export default Header;
