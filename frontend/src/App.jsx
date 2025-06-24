import Navbar from "./components/NavbarPage/Navbar";
import Mainarea from "./components/sidePage/Mainarea";

const App = () => {
  return (
    <div className="d-flex flex-column vh-100">
      <Navbar />
      <div className="flex-grow-1">
        <Mainarea />
      </div>
    </div>
  );
};

export default App;