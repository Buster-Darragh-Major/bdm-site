import BackgroundImage from "./components/BackgroundImage";
import ScrollPane from "./components/ScrollPane.js";
import Config from "./config.json";
import "./App.scss";

function App() {
  return (
    <div className="root">
      <BackgroundImage />
      <ScrollPane titles={Config.titles} />
    </div>
  );
}

export default App;
