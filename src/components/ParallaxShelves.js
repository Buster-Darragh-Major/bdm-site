import BackgroundImages from "../components/BackgroundImages";
import FillShelves from "./FillShelves.js";
import "../App.scss";

function ParallaxShelves(props) {
  return (
    <div className="fill-parent">
      <BackgroundImages scrollSpeed={props.config.parallaxScrollSpeed} />
      <FillShelves titles={props.config.titles} />
    </div>
  );
}

export default ParallaxShelves;
