import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Register from './Pages/Register/Register';
import Login from './Pages/Login/Login';
import Home from './Pages/Home/Home'
import Groups from './Pages/Groups/Groups';
import Profile from './Pages/Profile/Profile';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProtectedRoute from './ProtectedRoute'
import CreateGroup from './Pages/Groups/CreateGroup';
import JoinGroup from './Pages/Groups/JoinGroup';

function App() {
  return (
    <Router>
      <ToastContainer />
      <Routes>
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
        <Route path="/" element={<ProtectedRoute> <Home /> </ProtectedRoute>} />
        <Route path="/groups" element={<ProtectedRoute> <Groups /> </ProtectedRoute>} />
        <Route path="/createGroup" element={<ProtectedRoute> <CreateGroup /> </ProtectedRoute>} />
        <Route path="/joinGroup" element={<ProtectedRoute> <JoinGroup /> </ProtectedRoute>} />
        <Route path="/profile" element={<ProtectedRoute> <Profile /> </ProtectedRoute>} />
      </Routes>
    </Router>
  );
}

export default App;
