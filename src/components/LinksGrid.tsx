import "./LinksGrid.scss";
import {IconLink} from "./IconLink.js";
import {type FunctionComponent} from "react";

// TODO: pull out config types into ts types
const LinksGrid: FunctionComponent<{
    links: Array<{
        "displayName": string,
        "icon": string,
        "url": string
    }>
}> = ({links}) => {
    const linkElements = links.map((link, i) => {
        return (
            <IconLink key={i} url={link.url} displayName={link.displayName}/>
        );
    });
    return (
        <div className="links-grid-container">
            {linkElements}
        </div>
    );
}

export {LinksGrid};