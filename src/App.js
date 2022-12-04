import "App.css";
import Screen from "screen/Screen";
import { BrowserRouter as Router } from "react-router-dom";
import Components from "screen/componentTest/Components";

function App() {
    return (
        <div className="App">
            <Router>
                <Screen />
            </Router>
        </div>
    );
}

export default App;
