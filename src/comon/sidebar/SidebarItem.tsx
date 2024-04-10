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
        "text-gray-100 py-1.5 px-2 w-full hover:bg-white/10 rounded-md flex items-center justify-start gap-4",
        className
      )}
    >
      <div className="flex items-center justify-center">{icon}</div>
      <p className="text-sm">{title}</p>
    </div>
  );
};

export default SidebarItem;
