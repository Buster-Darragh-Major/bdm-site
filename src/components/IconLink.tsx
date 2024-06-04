import "./IconLink.scss";

function IconLink(props) {
    return (
        <a className="icon-link-container" href={props.url} rel="noopener noreferrer" target="_blank">
            <span>{props.displayName}</span>
        </a>
    );
}

export default IconLink;