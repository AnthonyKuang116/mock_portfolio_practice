import {Main, NavBar, Portfolio, Contact, Footer} from './components/index';
import "./style.css";

function App() {
    return (
        <div className="App">
            <NavBar />
            <Main />
            <Portfolio />
            <Contact />
            <Footer />
        </div>
    )
}

export default App;