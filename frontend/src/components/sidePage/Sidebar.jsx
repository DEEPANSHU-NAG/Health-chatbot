import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faXmark,
  faPenToSquare,
  faSearch,
  faHeartbeat,
  faStethoscope,
} from "@fortawesome/free-solid-svg-icons";
import "./Sidebar.css";

const Sidebar = ({ onToggle, visible }) => {
  return (
    <div
      className="sidebar"
      style={{
        width: "300px",
        height: "100vh",
        backgroundColor: "#0d6efd",
        color: "white",
        position: "fixed",
        top: 0,
        left: visible ? "0" : "-300px",
        transition: "left 0.3s ease-in-out",
        zIndex: 1000,
        padding: "1rem",
      }}
    >
      <button className="close-btn" onClick={onToggle}>
        <FontAwesomeIcon icon={faXmark} />
      </button>

      <h2 className="sidebar-title">Health Assistant</h2>

      <div className="icon-group">
        <div className="icon-item">
          <FontAwesomeIcon icon={faPenToSquare} />
          <span>Notes</span>
        </div>
        <div className="icon-item">
          <FontAwesomeIcon icon={faSearch} />
          <span>Scan</span>
        </div>
        <div className="icon-item">
          <FontAwesomeIcon icon={faStethoscope} />
          <span>Checkup</span>
        </div>
        <div className="icon-item">
          <FontAwesomeIcon icon={faHeartbeat} />
          <span>Vitals</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
