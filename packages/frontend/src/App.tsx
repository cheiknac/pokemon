import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Pages navigation
import Home from './pages/Home';
import Types from './pages/Types';
import Teams from './pages/Teams';
import AddTeam from './pages/AddTeam';

// Pages Signup et Register
import Signup from './pages/Signup';


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/types" element={<Types />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/addteam" element={<AddTeam />} />

          <Route path="/signup" element={<Signup />} />
        </Routes>

      </Router>
    </>
  )
}

export default App
