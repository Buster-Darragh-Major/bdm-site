import GetImage from "../ImageSource.js";
import useScrollPosition from "../hooks/useScrollPosition.js";

function BackgroundImages(props) {
    const pos = useScrollPosition(props.containerId, 0.5);
    const image1Src = GetImage(0);
    const image2Src = GetImage(1);
    const image3Src = GetImage(2);

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

export default BackgroundImages;