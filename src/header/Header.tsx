import { IoMdNotificationsOutline } from "react-icons/io";
import Avatar from "./Components/Avatar";
import InputSearch from "./Components/InputSearch";
import ToggleSidebar from "./Components/ToggleSidebar";
import { AiOutlineVideoCameraAdd } from "react-icons/ai";
import { FaYoutube } from "react-icons/fa";

const Header = () => {
  return (
    <div className="w-full h-14 px-4 flex items-center justify-between">
      <div className="h-full flex gap-4">
        <ToggleSidebar />
        <div className="flex items-center gap-1">
          <FaYoutube size={22} className="text-red-500" />
          <p className="text-base font-bold text-white mb-px">YouTobe</p>
        </div>
      </div>
      <InputSearch />
      <div className="flex items-center gap-3 text-white">
        <AiOutlineVideoCameraAdd size={19} />
        <IoMdNotificationsOutline size={19} />

        <Avatar />
      </div>
    </div>
  );
};

export default Header;
