import "./ParallaxShelves.scss";
import TypingTitle from "./TypingTitle.js";
import DotIndicators from "./DotIndicators";

function FillShelves(props) {
    var scrollContainerId = props.scrollContainerId;
    return (
        <div className="fill-parent">
            <div id={scrollContainerId} className="fill-parent scrollable scroll-snap-container">
                <section className="fill-parent scroll-snap-child flex-center">
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
            <DotIndicators elementsContainerId={scrollContainerId} count={5} threshold={0.8} />
        </div>
    );
}

export default FillShelves;