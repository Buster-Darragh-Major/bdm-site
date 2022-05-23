function Header(props) {
    return (
        props.items.map(
            (item, i) => <button href={item.path} key={"header" + i}>
                    {item.displayName}
                </button>
            )
    );
}

export default Header;