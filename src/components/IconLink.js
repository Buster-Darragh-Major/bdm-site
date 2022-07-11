import "./IconLink.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

function IconLink(props) {
    return (
        <a className="icon-link-container" href={props.url} rel="noopener noreferrer" target="_blank">
            <div className="icon-link-wipe"></div>
            <FontAwesomeIcon icon={['fab', props.icon]} />
            <span>{props.name}</span>
        </a>
    );
}

export default IconLink;