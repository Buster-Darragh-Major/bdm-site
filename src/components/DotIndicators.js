import "./DotIndicators.scss";

function DotIndicators(props) {
    var dots = [];
    for (var i = 0; i < props.count || 0; i++) {
        dots.push(<div key={i} className="dot-indicator"></div>);
    }

    return (
        <div className="dot-indicators-root">
            <div className="dot-indicators-container">
                <div className="dot-indicator-set">
                    {dots}
                </div>
                <div className="dot-indicator-current-container">
                    <div className="dot-indicator-current"></div>
                </div>
            </div>
        </div>
    );
}

export default DotIndicators;