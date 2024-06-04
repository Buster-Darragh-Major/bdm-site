import "./DotIndicators.scss";
import useScrollVisible from "../hooks/useScrollVisible";
import {type FunctionComponent, type MouseEventHandler} from "react";

const DotIndicators: FunctionComponent<{
    elementsContainerId: string,
    threshold: number,
    count: number
}> = ({elementsContainerId, threshold, count}) => {
    const pos = useScrollVisible(elementsContainerId, threshold);

    const onClick: MouseEventHandler = (e) => {
        e.preventDefault();
        const index = e.target.dataset.index; // TODO: fix this
        const element = document.getElementById(elementsContainerId)?.children[index];
        element?.scrollIntoView({behavior: "smooth", block: "start"});
    }

    const dots = [];
    for (let i = 0; i < count || 0; i++) {
        dots.push(
            <div key={i}
                 data-index={i}
                 className={`dot-indicator ${pos === i ? "dot-indicator--selected" : ""}`}
                 onClick={onClick}></div>
        );
    }

    return (
        <div className="dot-indicators-container">
            {dots}
        </div>
    );
}

export {DotIndicators};