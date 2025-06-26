import { useState } from "react";
import Sidebar from "./Sidebar";
import ChatSection from "../chatPage/ChatSection";

const Mainarea = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  return (
    <div
      className="main-container"
      style={{ height: "100vh", width: "100%", position: "relative" }}
    >
      <Sidebar onToggle={toggleSidebar} visible={sidebarOpen} />
      <div className="chat-wrapper">
        <ChatSection
          showSidebar={sidebarOpen}
          onToggleSidebar={toggleSidebar}
        />
      </div>
    </div>
  );
};

export default Mainarea;
