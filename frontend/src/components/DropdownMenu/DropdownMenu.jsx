import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faEllipsisVertical} from "@fortawesome/free-solid-svg-icons";

const DropdownMenu = () => {
  return (
    <>
      <div className="dropdown">

        <FontAwesomeIcon
          icon={faEllipsisVertical}
          className="dropdown-toggle"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        />
        <ul className="dropdown-menu">
          <li>
            <a className="dropdown-item" href="#">
              share
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Rename
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Archive
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Delete
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default DropdownMenu;
