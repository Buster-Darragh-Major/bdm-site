import "./ParallaxBackgroundImages.scss";
import useScrollPosition from "../hooks/useScrollPosition.tsx";

function ParallaxBackgroundImages(props) {
    const pos = useScrollPosition(props.scrollContainerId, 0.5).position;
    const image1Src = "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg";
    const image2Src = "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg";
    const image3Src = "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg";

    return (
        <div className="background-image-container" style={{ "willChange": "transform", "transform": `translateY(${pos}px)` }}>
            <div className="fill-parent">
                <img src={image1Src} alt="bass"></img>
            </div>
            <div className="fill-parent">
                <img src={image2Src} alt="kitty"></img>
            </div>
            <div className="fill-parent">
                <img src={image3Src} alt="me and jess"></img>
            </div>
        </div>
    );
}

export default ParallaxBackgroundImages;