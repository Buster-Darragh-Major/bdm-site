import "./LinksGrid.scss";
import IconLink from "./IconLink";


function LinksGrid(props) {
    var links = props.links.map((link, i) => {
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