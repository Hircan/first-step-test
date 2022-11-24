import "./App.css";
import Display from "./Component/View/Display/Display";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
    return (
        <div className="App">
            <Router>
                <Display />
            </Router>
        </div>
    );
}

export default App;
