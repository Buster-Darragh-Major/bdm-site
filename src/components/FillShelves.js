import "./ParallaxShelves.scss";
import TypingTitle from "./TypingTitle.js";
import ScrollArrowHint from "./ScrollArrowHint.js";

function FillShelves(props) {
    return (
        <div>
            <div>
                <section className="fill-view scroll-snap-child flex-center">

                    <div className="x-center-text padding-l">
                        <TypingTitle titles={props.titles}
                            titleHangTime="4000"
                            emptyHangTime="1700" />
                    </div>
                </section>
                <section className="fill-view scroll-snap-child background-navy">
                    
                </section>
                <section className="fill-view scroll-snap-child">
                    
                </section>
                <section className="fill-view scroll-snap-child background-green">
                    
                </section>
                <section className="fill-view scroll-snap-child">
                    
                </section>
            </div>
            <ScrollArrowHint />
        </div>
    );
}

export default FillShelves;