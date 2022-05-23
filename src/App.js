import Header from "./components/Header";
import configData from "./config.json";
import "./App.scss";

function App() {
  return (
    <div className="root">
      <Header items={configData.header} />
      <div className="flex-grow">Buster's new website baby</div>
    </div>
  );
}

export default App;
