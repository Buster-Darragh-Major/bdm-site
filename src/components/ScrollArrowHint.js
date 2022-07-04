import "./ScrollArrowHint.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'

function ScrollArrowHint(props) {
  return (
    <div className="scroll-arrow ">
        <FontAwesomeIcon icon={faAngleDown} />
    </div>
  );
}

export default ScrollArrowHint;
