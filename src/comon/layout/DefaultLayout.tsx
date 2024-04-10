import Header from "../../header/Header";
import Sidebar from "../sidebar/Sidebar";

interface DefaultLayoutProps {
  children: React.ReactElement;
}

const DefaultLayout = ({ children }: DefaultLayoutProps) => {
  return (
    <div className="from-black/90 to-black/85 bg-gradient-to-r h-screen overflow-hidden">
      <Header />
      <div className="h-[calc(100%-32px)] overflow-hidden flex gap-4">
        <Sidebar />
        {children}
      </div>
    </div>
  );
};
export default DefaultLayout;
