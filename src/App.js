import Home from './pages/home'
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HeroPage from './pages/heroPage'
import Teams from './pages/teams';
import TeamPage from './pages/teamPage';
import Heroes from './pages/heroes';
import ItemsPage from './pages/itemsPage'
import ItemPage from './pages/itemPage';


function App(props) {
  return (
    <div className="App">
      <Router>
        <Routes>
            <Route path="/" element={<Home data={props.data}/>} />
            <Route path="/heroes" element={<Heroes data={props.data}/>} />
            <Route path="/heroes/:id" element={<HeroPage data={props.data}/>} />
            <Route path="/teams" element={<Teams teamsData={props.teamsData}/>} />
            <Route exact path="/teams/:tag" element={<TeamPage players={props.proPlayersData}/>} />
            <Route path="/items" element={<ItemsPage/>} />
            <Route path="/items/:name" element={<ItemPage/>} />
        </Routes>
      </Router>
    </div>

  );
}

export default App;
