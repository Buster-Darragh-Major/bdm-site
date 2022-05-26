import TypingTitle from "./TypingTitle.js";

function ScrollPane(props) {
    return (
        <div className="fill-parent center-child">
            <TypingTitle titles={["buster darragh-major"]}
                titleHangTime="2000"
                emptyHangTime="700" />
        </div>
    );
}

export default ScrollPane;