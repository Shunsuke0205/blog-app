import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from './components/Home';
import CreatePost from './components/CreatePost';
import Login from './components/Login';
import Logout from './components/Logout';
import Navbar from './components/Navbar';
import { useState } from 'react';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Router>
      <Navbar isAuthenticated={isAuthenticated}/>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/createpost" element={<CreatePost isAuthenticated={isAuthenticated} />}></Route>
        <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />}></Route>
        <Route path="/logout" element={<Logout setIsAuth={setIsAuthenticated} />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
