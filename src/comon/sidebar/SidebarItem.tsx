import { ReactElement } from "react";
import { twMerge } from "tailwind-merge";

interface SidebarItemProps {
  icon: ReactElement;
  title: string;
  onClick: () => void;
  className?: string;
}

const SidebarItem = ({ icon, title, onClick, className }: SidebarItemProps) => {
  return (
    <div
      tabIndex={0}
      onClick={onClick}
      role="button"
      className={twMerge(
        "text-gray-100 p-1 px-2 w-full hover:bg-gray-800 rounded-md flex items-center justify-start gap-2",
        className
      )}
    >
      <div className="flex items-center justify-center">{icon}</div>
      <p className="text-xxs">{title}</p>
    </div>
  );
};

export default SidebarItem;
