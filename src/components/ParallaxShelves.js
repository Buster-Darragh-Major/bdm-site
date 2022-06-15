import BackgroundImages from "../components/BackgroundImages";
import ScrollPane from "../components/ScrollPane.js";
import { ParallaxProvider } from 'react-scroll-parallax';
import "../App.scss";

function ParallaxShelves(props) {
  return (
    <ParallaxProvider>
        <BackgroundImages scrollSpeed={props.config.parallaxScrollSpeed} />
        <ScrollPane titles={props.config.titles} />
    </ParallaxProvider>
  );
}

export default ParallaxShelves;
