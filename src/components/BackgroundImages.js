import GetImage from "../ImageSource.js";
import useScrollPosition from "../hooks/useScrollPosition.js";

/* TODO:
when user scrolls on foreground content, background content should scroll halkf as fast, meaning there can be an alernarting
card block layou in the foreground showiung an image every second block, which will be fully transparent, the "off" or even
blocks will be fill colour.
*/

function BackgroundImages(props) {
    const pos = useScrollPosition(0.5);

    return (
        <div className="background-image-container" style={{ "willChange": "transform", "transform": `translateY(${pos}px)` }}>
            <img src={GetImage()}
                alt="bass">
            </img>
            <img src={GetImage()}
                alt="bass">
            </img>
            <img src={GetImage()}
                alt="bass">
            </img>
            <img src={GetImage()}
                alt="bass">
            </img>
        </div>
    );
}

export default BackgroundImages;