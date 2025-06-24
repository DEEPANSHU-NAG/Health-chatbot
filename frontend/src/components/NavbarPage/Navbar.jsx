import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRobot } from "@fortawesome/free-solid-svg-icons";
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-primary shadow-sm px-3">
      <div className="container">
        <a className="navbar-brand fw-bold text-white" href="#">
          Health Chatbot
        </a>
        <FontAwesomeIcon icon={faRobot} className="text-white" />
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
