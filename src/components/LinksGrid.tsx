import "./LinksGrid.scss";
import IconLink from "./IconLink.js";


function LinksGrid(props) {
    const links = props.links.map((link, i) => {
        return (
            <IconLink key={i} url={link.url} name={link.name} icon={link.icon} displayName={link.displayName} />
        );
    });
    return (
        <div className="links-grid-container">
            {links}
        </div>
    );
}

export default LinksGrid;