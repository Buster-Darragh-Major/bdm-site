import "./ParallaxShelves.scss";
import ParallaxBackgroundImages from "./ParallaxBackgroundImages.tsx";
import FillShelves from "./FillShelves.tsx";

function ParallaxShelves(props) {
  const containerID = `parallaxShelves-${props.id}`;
  const shelvesScrollContainerid = `shelvesScrollContainer-${props.id}`;

  return (
    <div id={containerID} className="fill-parent">
      <ParallaxBackgroundImages scrollContainerId={shelvesScrollContainerid} scrollSpeed={props.config.parallaxScrollSpeed} />
      <FillShelves scrollContainerId={shelvesScrollContainerid} content={props.config.content} />
    </div>
  );
}

export default ParallaxShelves;
