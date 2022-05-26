import GetImage from "../ImageSource.js";

function BackgroundImage(props) {
    return (
        <div className="background-image-container">
            <img src={GetImage()}
                alt="bass">
            </img>
        </div>
    );
}

export default BackgroundImage;