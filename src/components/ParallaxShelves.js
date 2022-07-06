import "./ParallaxShelves.scss";
import BackgroundImages from "../components/BackgroundImages";
import FillShelves from "./FillShelves.js";

function ParallaxShelves(props) {
  var containerID = `parallaxShelves-${props.id}`;
  return (
    <div id={`parallaxShelves-${props.id}`} className="fill-parent scrollable scroll-snap-container">
      <BackgroundImages containerId={containerID} scrollSpeed={props.config.parallaxScrollSpeed} />
      <FillShelves titles={props.config.titles} />
      
    </div>
  );
}

export default ParallaxShelves;
