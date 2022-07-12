import "./IconLink.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

function IconLink(props) {
    return (
        <a className="icon-link-container" href={props.url} rel="noopener noreferrer" target="_blank">
            <FontAwesomeIcon icon={['fab', props.icon]} />
            <span>{props.displayName}</span>
        </a>
    );
}

export default IconLink;