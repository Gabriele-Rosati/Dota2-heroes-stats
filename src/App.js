import Home from './pages/home';
import './App.css';
import { Link, BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HeroPage from './pages/heroPage'
import Teams from './pages/teams';
import TeamPage from './pages/teamPage';
import TestPage from './pages/test';

function App(props) {
  return (
    <div className="App">
      <Router>
        <Routes>
            <Route path="/" element={<Home data={props.data}/>} />
            <Route path="/hero/:name" element={<HeroPage data={props.data}/>} />
            <Route path="/teams" element={<Teams teamsData={props.teamsData}/>} />
            <Route exact path="/teams/:tag" element={<TeamPage/>} />
        </Routes>
      </Router>
    </div>

  );
}

export default App;
