import TypingTitle from "./TypingTitle.js";

function ScrollPane(props) {
    return (
        <div className="fill-parent center-child">
            <TypingTitle titles={props.titles}
                titleHangTime="4000"
                emptyHangTime="1700" />
        </div>
    );
}

export default ScrollPane;