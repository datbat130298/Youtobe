import { ReactElement } from "react";
import { twMerge } from "tailwind-merge";

interface SidebarGroupProps {
  children: ReactElement;
  title?: string;
  className?: string;
}

const SidebarGroup = ({ children, title, className }: SidebarGroupProps) => {
  return (
    <div className={twMerge("py-2 border-t border-gray-700", className)}>
      {title && <p className="text-white text-sm px-2">{title}</p>}
      {children}
    </div>
  );
};

export default SidebarGroup;
