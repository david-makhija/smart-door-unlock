import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { auth } from "../firebase";
import { logoutApi } from '../Api/Users'
import { useNavigate } from 'react-router-dom';

export default function Header() {
  const [user, setUser] = useState(null)
  const navigate = useNavigate();
  auth.onAuthStateChanged((user) => {
    if (user) setUser(user);
  })

  return (
    <Navbar expand="lg" id="topNav" variant="dark">
      <Container>
        <i className="fa-sharp fa-solid fa-house-lock"></i>
        <Navbar.Brand href="/" style={{ color: "white" }}> Smart-Door-Lock</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <button onClick={() => navigate("/groups")}> View Groups </button>
            <button onClick={() => navigate("/createGroup")}> Create Group </button>
            <button onClick={() => navigate("/joinGroup")}> Join Group </button>
            <button onClick={logoutApi}> Logout </button>
            <p>{user?.email}</p>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
