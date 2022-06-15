import TypingTitle from "./TypingTitle.js";

function FillShelves(props) {
    return (
        <div className="fill-parent">
            <div className="fill-parent center-child">
                <TypingTitle titles={props.titles}
                    titleHangTime="4000"
                    emptyHangTime="1700" />
            </div>
            <div className="fill-parent center-child" style={{"backgroundColor": "red"}}>
                <TypingTitle titles={props.titles}
                    titleHangTime="4000"
                    emptyHangTime="1700" />
            </div>
            <div className="fill-parent center-child">
                <TypingTitle titles={props.titles}
                    titleHangTime="4000"
                    emptyHangTime="1700" />
            </div>
            <div className="fill-parent center-child" style={{"backgroundColor": "red"}}>
                <TypingTitle titles={props.titles}
                    titleHangTime="4000"
                    emptyHangTime="1700" />
            </div>
            <div className="fill-parent center-child">
                <TypingTitle titles={props.titles}
                    titleHangTime="4000"
                    emptyHangTime="1700" />
            </div>
        </div>
    );
}

export default FillShelves;