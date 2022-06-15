import { useParallax } from 'react-scroll-parallax';
import GetImage from "../ImageSource.js";

/* TODO:
when user scrolls on foreground content, background content should scroll halkf as fast, meaning there can be an alernarting
card block layou in the foreground showiung an image every second block, which will be fully transparent, the "off" or even
blocks will be fill colour.
*/

function BackgroundImages(props) {
    const parallax = useParallax({
        speed: props.scrollSpeed,
    });

    return (
        <div ref={parallax.ref} className="background-image-container">
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