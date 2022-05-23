import Header from "./components/Header";
import configData from "./config.json";
import "./App.scss";

function App() {
  return (
    <div className="flex-col">
      <Header items={configData.header} />
      <div>Buster's new website baby</div>
    </div>
  );
}

export default App;
