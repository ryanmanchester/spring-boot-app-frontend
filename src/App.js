import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import NavBar from './layout/NavBar'
import Home from './pages/Home'
import AddUser from './users/AddUser'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar/>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/add-user" element={<AddUser />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
