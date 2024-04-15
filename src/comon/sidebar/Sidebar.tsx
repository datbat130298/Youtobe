import SidebarItem from "./SidebarItem";
import { GoHome } from "react-icons/go";
import { SiYoutubeshorts } from "react-icons/si";
import { PiVideo } from "react-icons/pi";
import { BsPerson } from "react-icons/bs";
import SidebarGroup from "./SidebarGroup";
import { RiMenuFoldFill } from "react-icons/ri";
import {
  MdHelpOutline,
  MdOutlineSportsFootball,
  MdOutlinedFlag,
  MdRestore,
} from "react-icons/md";
import { HiOutlineFire, HiOutlineNewspaper } from "react-icons/hi";
import { LuMusic2 } from "react-icons/lu";
import { TbDeviceGamepad2 } from "react-icons/tb";
import { IoSettingsOutline } from "react-icons/io5";

const Sidebar = () => {
  return (
    <div className="w-52 h-full px-2 overflow-hidden">
      <SidebarItem
        title="Trang chủ"
        icon={<GoHome size={16} />}
        onClick={() => null}
      />
      <SidebarItem
        title="Shorts"
        icon={<SiYoutubeshorts size={15} />}
        onClick={() => null}
        className=""
      />
      <SidebarItem
        title="Kênh đăng ký"
        icon={<PiVideo size={16} />}
        onClick={() => null}
      />
      <SidebarGroup title="Bạn" className="mt-1">
        <>
          <SidebarItem
            title="Kênh của bạn"
            icon={<BsPerson size={16} />}
            onClick={() => null}
          />
          <SidebarItem
            title="Video đa xem"
            icon={<MdRestore size={16} />}
            onClick={() => null}
          />
          <SidebarItem
            title="Danh sách phát"
            icon={<RiMenuFoldFill size={16} />}
            onClick={() => null}
          />
        </>
      </SidebarGroup>
      <SidebarGroup title="Kênh đăng ký" className="mt-1">
        <>
          <SidebarItem
            title="Nhà đẹp"
            icon={<BsPerson size={16} />}
            onClick={() => null}
          />
          <SidebarItem
            title="Xe đẹp"
            icon={<MdRestore size={16} />}
            onClick={() => null}
          />
          <SidebarItem
            title="Sức khỏe và dinh dưỡng"
            icon={<RiMenuFoldFill size={16} />}
            onClick={() => null}
          />
        </>
      </SidebarGroup>
      <SidebarGroup title="Khám phá" className="mt-1">
        <>
          <SidebarItem
            title="Thịnh hành"
            icon={<HiOutlineFire size={16} />}
            onClick={() => null}
          />
          <SidebarItem
            title="Video đa xem"
            icon={<LuMusic2 size={16} />}
            onClick={() => null}
          />
          <SidebarItem
            title="Trò chơi"
            icon={<TbDeviceGamepad2 size={16} />}
            onClick={() => null}
          />
          <SidebarItem
            title="Tin tức"
            icon={<HiOutlineNewspaper size={16} />}
            onClick={() => null}
          />
          <SidebarItem
            title="Thể thao"
            icon={<MdOutlineSportsFootball size={16} />}
            onClick={() => null}
          />
        </>
      </SidebarGroup>
      <SidebarGroup>
        <>
          <SidebarItem
            title="Cài đặt"
            icon={<IoSettingsOutline size={16} />}
            onClick={() => null}
          />
          <SidebarItem
            title="Nhật ký báo cáo"
            icon={<MdOutlinedFlag size={16} />}
            onClick={() => null}
          />
          <SidebarItem
            title="Hỗ trợ"
            icon={<MdHelpOutline size={16} />}
            onClick={() => null}
          />
        </>
      </SidebarGroup>
    </div>
  );
};

export default Sidebar;
