import image from "../../assets/THU_5762.jpg";

const VideoItem = () => {
  return (
    <div className="w-40">
      <img src={image} className="w-full h-24 rounded-sm" alt="avatar" />
      <div className="flex mt-2 gap-2">
        <div className="overflow-hidden rounded-full object-center h-4 w-4 shrink-0">
          <img src={image} alt="avatar" className="w-full" />
        </div>
        <div className="flex flex-col text-xxs text-white">
          <p className="line-clamp-2 font-semibold text-white text-xxs">
            BÀI HÁT TRUNG QUỐC HAY NHẤT TikTok
          </p>
          <p className="truncate text-gray-400">Gia đình họ Dương</p>
          <p className="truncate text-gray-400">2509 lượt xem</p>
        </div>
      </div>
    </div>
  );
};

export default VideoItem;
