import DropdownMenu from "../DropdownMenu/DropdownMenu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faXmark,
  faPenToSquare,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
const Sidebar = ({ onToggle }) => {
  return (
    <div className="p-3" style={{ height: "100vh" }}>
      <button className="btn btn-light mb-3 float-end" onClick={onToggle}>
        <FontAwesomeIcon icon={faXmark} />
      </button>
      <h5 className="text-center mb-4">Health Assistant</h5>
      <div className="d-flex w-100 justify-content-between mb-3 px-3">
        <FontAwesomeIcon icon={faPenToSquare} />
        <FontAwesomeIcon icon={faSearch} />
      </div>
      <h2 className="mx-3">chats</h2>
      <div className="p-3 rounded mb-3">
        <div className="d-flex align-items-center justify-content-between mb-2">
          <p className="mb-0">Message 1</p>
          <DropdownMenu />
        </div>
        <div className="d-flex align-items-center justify-content-between mb-2">
          <p className="mb-0">Message 2</p>
          <DropdownMenu />
        </div>
        <div className="d-flex align-items-center justify-content-between mb-2">
          <p className="mb-0">Message 3</p>
          <DropdownMenu />
        </div>
        <div className="d-flex align-items-center justify-content-between mb-2">
          <p className="mb-0">Message 4</p>
          <DropdownMenu />
        </div>
        <div className="d-flex align-items-center justify-content-between">
          <p className="mb-0">Message 5</p>
          <DropdownMenu />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
