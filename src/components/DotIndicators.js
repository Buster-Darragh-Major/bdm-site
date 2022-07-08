import "./DotIndicators.scss";
import useScrollVisible from "../hooks/useScrollVisible";

function DotIndicators(props) {
    const pos = useScrollVisible(props.scrollContainerId, props.elementsContainerId);

    var dots = [];
    for (var i = 0; i < props.count || 0; i++) {
        dots.push(<div key={i} className={`dot-indicator ${props.selected === i ? "dot-indicator--selected" : ""}`}></div>);
    }

    return (
        <div className="dot-indicators-container">
            <div className="dot-indicator-set">
                {dots}
            </div>
        </div>
    );
}

export default DotIndicators;