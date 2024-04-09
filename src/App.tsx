import ContainerContent from "./comon/container/ContainerContent";
import Sidebar from "./comon/sidebar/Sidebar";
import Header from "./header/Header";

function App() {
  return (
    <div className="from-black/90 to-black/85 bg-gradient-to-r h-screen overflow-hidden">
      <Header />
      <div className="h-[calc(100%-32px)] overflow-hidden flex gap-4">
        <Sidebar />
        <ContainerContent />
      </div>
    </div>
  );
}

export default App;
