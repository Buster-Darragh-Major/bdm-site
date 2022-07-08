import "./ParallaxShelves.scss";
import BackgroundImages from "../components/BackgroundImages";
import FillShelves from "./FillShelves.js";

function ParallaxShelves(props) {
  const containerID = `parallaxShelves-${props.id}`;

  return (
    <div id={containerID} className="fill-parent scrollable scroll-snap-container">
      <BackgroundImages containerId={containerID} scrollSpeed={props.config.parallaxScrollSpeed} />
      <FillShelves containerId={containerID} titles={props.config.titles} />
    </div>
  );
}

export default ParallaxShelves;
