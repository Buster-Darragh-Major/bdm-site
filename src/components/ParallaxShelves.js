import BackgroundImages from "../components/BackgroundImages";
import FillShelves from "./FillShelves.js";
import "../App.scss";

function ParallaxShelves(props) {
  return (
    <div id={`parallaxShelves-${props.id}`} className="fill-parent scrollable scroll-snap-container">
      <BackgroundImages containerId={`parallaxShelves-${props.id}`} scrollSpeed={props.config.parallaxScrollSpeed} />
      <FillShelves titles={props.config.titles} />
    </div>
  );
}

export default ParallaxShelves;
