import TestBottom from "./Component/View/Mobile/TestBottom";
import TestHeader from "./Component/View/Mobile/TestHeader";
import "./App.css";
import TestContent from "./Component/View/Mobile/TestContent";

function App() {
    return (
        <div className="App">
            <TestHeader />
            <TestContent />
            <TestBottom />
        </div>
    );
}

export default App;
