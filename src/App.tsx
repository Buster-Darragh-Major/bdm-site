import './App.scss'
import Config from "./config.json";
import ParallaxShelves from "./components/ParallaxShelves.tsx";

function App() {
    return (
        <div className="root">
            <ParallaxShelves config={Config} id={0} />
        </div>
    );
}

export default App
