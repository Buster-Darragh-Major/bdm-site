import TypingTitle from "./TypingTitle.js";

function FillShelves(props) {
    return (
        <div>
            <section className="center-child fill-view scroll-snap-child">
                <TypingTitle titles={props.titles}
                    titleHangTime="4000"
                    emptyHangTime="1700" />
            </section>
            <section className="center-child fill-view scroll-snap-child background-red">
                <TypingTitle titles={props.titles}
                    titleHangTime="4000"
                    emptyHangTime="1700" />
            </section>
            <section className="center-child fill-view scroll-snap-child">
                <TypingTitle titles={props.titles}
                    titleHangTime="4000"
                    emptyHangTime="1700" />
            </section>
            <section className="center-child fill-view scroll-snap-child background-green">
                <TypingTitle titles={props.titles}
                    titleHangTime="4000"
                    emptyHangTime="1700" />
            </section>
            <section className="center-child fill-view scroll-snap-child">
                <TypingTitle titles={props.titles}
                    titleHangTime="4000"
                    emptyHangTime="1700" />
            </section>
        </div>
    );
}

export default FillShelves;