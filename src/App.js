import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import NavBar from './layout/NavBar'
import Landing from './pages/Landing'
import Home from './pages/Home'
import AddUser from './users/AddUser'
import EditUser from './users/EditUser'
import ViewUser from './users/ViewUser'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar/>
        <Routes>
          <Route exact path="/" element={<Landing />} />
          <Route exact path="/employees" element={<Home />} />
          <Route exact path="/add-user" element={<AddUser />} />
          <Route exact path = "/edit-user/:id" element={<EditUser />} />
          <Route exact path = "/view-user/:id" element={<ViewUser />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
