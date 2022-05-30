import TypingTitle from "./TypingTitle.js";
import Card from "./Card.js";

function ScrollPane(props) {
    return (
        <div className="fill-parent relative-scroll">
            <div className="fill-parent center-child">
                <TypingTitle titles={props.titles}
                    titleHangTime="4000"
                    emptyHangTime="1700" />
            </div>
            <div className="padding-xl">
                <Card data="heya weya hdfbshi heya weya hdfbshi heya weya hdfbshi heya weya hdfbshi heya weya hdfbshi heya weya hdfbshi heya weya hdfbshi heya weya hdfbshi heya weya hdfbshi" />
            </div>
        </div>
    );
}

export default ScrollPane;