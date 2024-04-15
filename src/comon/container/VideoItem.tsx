import image from "../../assets/THU_5762.jpg";

interface VideoItemProps {
  data: any;
}

const VideoItem = ({data}: VideoItemProps) => {
  return (
    <div className="w-72">
      <img src={image} className="w-full h-40 rounded-md" alt="avatar" />
      <div className="flex mt-2 gap-2">
        <div className="mt-0.5 overflow-hidden rounded-full object-center h-7 w-7 shrink-0">
          <img src={image} alt="avatar" className="w-full" />
        </div>
        <div className="flex flex-col text-xs text-white">
          <p className="line-clamp-2 font-semibold text-white text-sm">
            BÀI HÁT TRUNG QUỐC HAY NHẤT TikTok
          </p>
          <p className="truncate text-xs text-gray-400">Gia đình họ Dương</p>
          <p className="truncate text-xs text-gray-400">2509 lượt xem</p>
        </div>
      </div>
    </div>
  );
};

export default VideoItem;
