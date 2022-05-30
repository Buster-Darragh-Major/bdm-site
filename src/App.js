import BackgroundImages from "./components/BackgroundImages";
import ScrollPane from "./components/ScrollPane.js";
import Config from "./config.json";
import "./App.scss";

function App() {
  return (
    <div className="root">
      <BackgroundImages />
      <ScrollPane titles={Config.titles} />
    </div>
  );
}

export default App;
