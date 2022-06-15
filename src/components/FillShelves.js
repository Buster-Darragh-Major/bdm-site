import TypingTitle from "./TypingTitle.js";

function FillShelves(props) {
    return (
        <div>
            <section className="center-child fill-view">
                <TypingTitle titles={props.titles}
                    titleHangTime="4000"
                    emptyHangTime="1700" />
            </section>
            <section className="center-child fill-view background-red">
                <TypingTitle titles={props.titles}
                    titleHangTime="4000"
                    emptyHangTime="1700" />
            </section>
            <section className="center-child fill-view">
                <TypingTitle titles={props.titles}
                    titleHangTime="4000"
                    emptyHangTime="1700" />
            </section>
            <section className="center-child fill-view background-green">
                <TypingTitle titles={props.titles}
                    titleHangTime="4000"
                    emptyHangTime="1700" />
            </section>
            <section className="center-child fill-view">
                <TypingTitle titles={props.titles}
                    titleHangTime="4000"
                    emptyHangTime="1700" />
            </section>
        </div>
    );
}

export default FillShelves;