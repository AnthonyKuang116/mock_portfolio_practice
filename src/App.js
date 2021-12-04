import { HomePage, PortfolioPage, ContactPage } from "./components/Pages/index"
import "./style.css";
import "./bootstrap/css/bootstrap.min.css"
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

import React, { useEffect } from 'react';
import {projects, navigation} from "./bootstrap/js/index"

function App() {
    useEffect(() => {
        navigation()
        projects()
    }, [])

    return (
        <div className="App">
            <Router>
                <Switch>
                    <Route exact path="/">
                        <HomePage />
                    </Route>
                    <Route exact path="/portfolio">
                        <PortfolioPage />
                    </Route>
                    <Route exact path="/contact">
                        <ContactPage />
                    </Route>
                </Switch>
            </Router>
        </div>
    )
}

export default App;