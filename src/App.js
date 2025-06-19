import "./App.css";
import Home from "./Home";
import NavBar from "./NavBar";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom/cjs/react-router-dom.min";

function App() {
    return (
        <Router>
            <div className='App'>
                <NavBar />
                <Switch>
                    <Route path='/'>
                        <Home />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
