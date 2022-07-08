import "./ParallaxShelves.scss";
import TypingTitle from "./TypingTitle.js";
import DotIndicators from "./DotIndicators";

function FillShelves(props) {
    var sectionContainerId = "fillShellvesSectionContainer";
    return (
        <div>
            <div id={sectionContainerId}>
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
            <DotIndicators scrollContainerId={props.containerId} elementsContainerId={sectionContainerId} count={5} selected={2} />
        </div>
    );
}

export default FillShelves;