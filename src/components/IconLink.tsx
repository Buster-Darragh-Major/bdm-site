import "./IconLink.scss";
import {type FunctionComponent} from "react";

const IconLink: FunctionComponent<{ displayName: string, url: string }> = ({
                                                                               displayName,
                                                                               url,
                                                                           }) => {
    return (
        <a className="icon-link-container" href={url} rel="noopener noreferrer" target="_blank">
            <span>{displayName}</span>
        </a>
    );
}

export {IconLink};