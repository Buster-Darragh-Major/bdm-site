import "./App.scss";
import Config from "./config.json";
import ParallaxShelves from "./components/ParallaxShelves";

function App() {
  return (
      <div className="root">
        <ParallaxShelves config={Config} />
      </div>
  );
}

export default App;
