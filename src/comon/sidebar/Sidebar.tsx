import SidebarItem from "./SidebarItem";
import { GoHome } from "react-icons/go";
import { SiYoutubeshorts } from "react-icons/si";
import { PiVideo } from "react-icons/pi";
import { BsPerson } from "react-icons/bs";
import SidebarGroup from "./SidebarGroup";
import { RiMenuFoldFill } from "react-icons/ri";
import { MdRestore } from "react-icons/md";

const Sidebar = () => {
  return (
    <div className="w-36 h-full px-2">
      <SidebarItem
        title="Trang chủ"
        icon={<GoHome size={10} />}
        onClick={() => null}
      />
      <SidebarItem
        title="Shorts"
        icon={<SiYoutubeshorts size={9} />}
        onClick={() => null}
        className=""
      />
      <SidebarItem
        title="Kênh đăng ký"
        icon={<PiVideo size={10} />}
        onClick={() => null}
      />
      <SidebarGroup title="Bạn" className="mt-1">
        <>
          <SidebarItem
            title="Kênh của bạn"
            icon={<BsPerson size={10} />}
            onClick={() => null}
          />
          <SidebarItem
            title="Video đa xem"
            icon={<MdRestore size={10} />}
            onClick={() => null}
          />
          <SidebarItem
            title="Danh sách phát"
            icon={<RiMenuFoldFill size={10} />}
            onClick={() => null}
          />
        </>
      </SidebarGroup>
    </div>
  );
};

export default Sidebar;
