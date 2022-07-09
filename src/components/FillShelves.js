import "./ParallaxShelves.scss";
import TypingTitle from "./TypingTitle.js";
import DotIndicators from "./DotIndicators";

function FillShelves(props) {
    const scrollContainerId = props.scrollContainerId;
    const content = props.content;
    return (
        <div className="fill-parent">
            <div id={scrollContainerId} className="fill-parent scrollable scroll-snap-container">
                <section className="fill-parent scroll-snap-child flex-center">
                    <div className="x-center-text padding-xl">
                        <TypingTitle titles={content[0].data[content[0].name]}
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