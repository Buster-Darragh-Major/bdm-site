import "./Header.scss";

function Header(props) {
    return (
        <div className="flex-row flex-space-between">
            {props.items.map(
                (item, i) => <button className="header-item" href={item.path} key={"header" + i}>
                        {item.displayName}
                    </button>
                )}
        </div>
    );
}

export default Header;