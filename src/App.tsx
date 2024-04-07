import Sidebar from "./comon/sidebar/Sidebar";
import Header from "./header/Header";

function App() {
  return (
    <div className="from-black/90 to-black/85 bg-gradient-to-r h-screen">
      <Header />
      <div>
        <Sidebar />
      </div>
    </div>
  );
}

export default App;
