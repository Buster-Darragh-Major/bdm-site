import BackgroundImage from "./components/BackgroundImage";
import ScrollPane from "./components/ScrollPane.js";
import "./App.scss";

function App() {
  return (
    <div className="root">
      <BackgroundImage />
      <ScrollPane />
      <div className="flex-grow">Buster's new website baby</div>
    </div>
  );
}

export default App;
