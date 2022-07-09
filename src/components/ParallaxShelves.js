import "./ParallaxShelves.scss";
import ParallaxBackgroundImages from "./ParallaxBackgroundImages.js";
import FillShelves from "./FillShelves.js";

function ParallaxShelves(props) {
  const containerID = `parallaxShelves-${props.id}`;
  const shelvesScrollContainerid = `shelvesScrollContainer-${props.id}`;

  return (
    <div id={containerID} className="fill-parent">
      <ParallaxBackgroundImages scrollContainerId={shelvesScrollContainerid} scrollSpeed={props.config.parallaxScrollSpeed} />
      <FillShelves scrollContainerId={shelvesScrollContainerid} titles={props.config.titles} />
    </div>
  );
}

export default ParallaxShelves;
