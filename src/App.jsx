import { Routes, Route, Link } from "react-router-dom";
import AllPlayers from "./components/AllPlayers";
import NewPlayerForm from "./components/NewPlayerForm";
import SinglePlayer from "./components/SinglePlayer";
import './App.css'

function App() {


  return (
    <div id="container">
      <div id="navbar">
        <nav>
          <Link to="/AllPlayers">All Players</Link> <br></br>
          <Link to="/NewPlayerForm">New Player</Link> <br></br>
          <Link to="/SinglePlayer">Single Player</Link> <br></br>
        </nav>
      </div>
      <div id="main-section">
        <Routes>
          <Route path="/AllPlayers" element={<AllPlayers/>} />
          <Route path="/NewPlayerForm" element={<NewPlayerForm/>} />
          <Route path="/SinglePlayer" element={<SinglePlayer/>} >
            <Route path="/detail" element={<Detail/>} />
            <Route path="/detail" element={<Detail/>} />
          </Route>
        </Routes>
      </div>
    </div>
  )
}

export default App
