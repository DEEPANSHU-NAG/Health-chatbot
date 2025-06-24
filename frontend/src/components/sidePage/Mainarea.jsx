import { useState } from "react";
import Sidebar from "./Sidebar";
import ChatSection from "../chatPage/ChatSection";

const Mainarea = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  return (
    <div className="d-flex" style={{ height: "100vh", width: "100%" }}>
      {sidebarOpen && (
        <div className="bg-primary text-white" style={{ width: "300px", height: "100vh" }}>
          <Sidebar onToggle={toggleSidebar} />
        </div>
      )}
      <div className="flex-grow-1" style={{ height: "100vh" }}>
        <ChatSection showSidebar={sidebarOpen} onToggleSidebar={toggleSidebar} />
      </div>
    </div>
  );
};

export default Mainarea;
