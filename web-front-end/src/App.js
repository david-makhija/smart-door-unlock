import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PrivateRoute from './PrivateRoute';
import Register from './Pages/Register/Register';
import Login from './Pages/Login/Login';
import Home from './Pages/Home/Home'
import Groups from './Pages/Groups/Groups';
import Profile from './Pages/Profile/Profile';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {
  return (
    <Router>
      <ToastContainer />
      <Routes>
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
        <Route path="/" element={<PrivateRoute/>}>
          <Route path="/" element={<Home/>} />
          <Route path="/groups" element={<Groups/>}/>
          <Route path="/profile" element={<Profile/>} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
