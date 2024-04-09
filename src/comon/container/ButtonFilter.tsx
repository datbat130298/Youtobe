import { twMerge } from "tailwind-merge";

interface ButtonFilterProps {
  title: string;
  isActive?: boolean;
}

const ButtonFilter = ({ title, isActive = false }: ButtonFilterProps) => {
  return (
    <div
      className={twMerge(
        "rounded-sm px-2 py-0.5 text-gray-200 bg-black/40 hover:bg-gray-800",
        isActive && "bg-white text-gray-800"
      )}
    >
      <p className="text-xxs">{title}</p>
    </div>
  );
};

export default ButtonFilter;
