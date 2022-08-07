import "./ParallaxShelves.scss";
import TypingTitle from "./TypingTitle.js";
import LinksGrid from "./LinksGrid.js";
import LastFm from "./LastFm";
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
                <div className="fill-parent x-center-text">
                        <LastFm links={content[1].data[content[1].name]} />
                    </div>
                </section>
                <section className="fill-view scroll-snap-child">
                    
                </section>
                <section className="fill-view scroll-snap-child background-green">
                    <div className="fill-parent x-center-text">
                        <LinksGrid links={content[2].data[content[2].name]} />
                    </div>
                </section>
                <section className="fill-view scroll-snap-child">
                    
                </section>
            </div>
            <DotIndicators elementsContainerId={scrollContainerId} count={5} threshold={0.8} />
        </div>
    );
}

export default FillShelves;