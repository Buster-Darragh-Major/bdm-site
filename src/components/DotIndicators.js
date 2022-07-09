import "./DotIndicators.scss";
import useScrollVisible from "../hooks/useScrollVisible";


function DotIndicators(props) {
    const pos = useScrollVisible(props.elementsContainerId, props.threshold);
    
    function dot_onClick(e) {
        e.preventDefault();
        const index = e.target.dataset.index;
        const element = document.getElementById(props.elementsContainerId).children[index];
        element.scrollIntoView({ behavior: "smooth", block: "start" });
    }

    var dots = [];
    for (var i = 0; i < props.count || 0; i++) {
        dots.push(
            <div key={i} 
                data-index={i}
                className={`dot-indicator ${pos === i ? "dot-indicator--selected" : ""}`}
                onClick={dot_onClick}></div>
        );
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