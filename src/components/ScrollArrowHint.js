import "./ScrollArrowHint.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { faAngleUp } from '@fortawesome/free-solid-svg-icons';
import useScrollPosition from "../hooks/useScrollPosition.js";

function ScrollArrowHint(props) {
  const posInfo = useScrollPosition(props.containerId, 1);
  return (
    <div>
      <div className={`scroll-arrow scroll-arrow--top scroll-arrow scroll-arrow--top--${posInfo.isTop ? "hidden" : "visible"}`}>
          <FontAwesomeIcon icon={faAngleUp} />
      </div>
      <div className={`scroll-arrow scroll-arrow--bottom scroll-arrow scroll-arrow--bottom--${posInfo.isBottom ? "hidden" : "visible"}`}>
          <FontAwesomeIcon icon={faAngleDown} />
      </div>
    </div>
  );
}

export default ScrollArrowHint;
