import avatar from "../../assets/THU_5762.jpg";

const Avatar = () => {
  return (
    <div
      className="h-6 w-6  rounded-full overflow-hidden"
      role="button"
      tabIndex={0}
      onClick={() => null}
    >
      <img src={avatar} alt="avatr" />
    </div>
  );
};

export default Avatar;
