import Home from './pages/home';
import './App.css';
import { Link, BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HeroPage from './pages/heroPage'

function App(props) {
  return (
    <div className="App">
      <Router>
        <Routes>
            <Route path="/" element={<Home data={props.data}/>} />
            <Route path="/hero/:name" element={<HeroPage data={props.data}/>} />
        </Routes>
      </Router>
    </div>

  );
}

export default App;
