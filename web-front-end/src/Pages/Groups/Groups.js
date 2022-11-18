import "./Groups.css";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { createGroupApi, joinGroupApi } from "../../Api/Groups";
import { logoutApi } from '../../Api/Users'
import { auth } from "../../firebase";

function Groups() {
  return (
    <div id="grpBody">
      <Navbar expand="lg" id="topNav" variant="dark">
        <Container>
          <i className="fa-sharp fa-solid fa-house-lock"></i>
          <Navbar.Brand href="/" style={{ color: "white" }}> Smart-Door-Lock</Navbar.Brand>
          {/* <Navbar.Toggle aria-controls="basic-navbar-nav" style={{color: "white"}}/> */}
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <button onClick={createGroupApi}> Create Group </button>
              <button onClick={joinGroupApi}> Join Group </button>
              <button onClick={logoutApi}> Logout </button>
              <p >{auth?.currentUser?.email}</p>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className="p-5 text-center" id="jumboTron">
        <h1 className="mb-3">David's Room</h1>
        <h4 className="mb-3">Status: Locked</h4>
        <a className="btn btn-primary" href="/" role="button">
          Open
        </a>
      </div>
      <div className="p-5 text-center" id="jumboTron">
        <h1 className="mb-3">David's Room</h1>
        <h4 className="mb-3">Status: Locked</h4>
        <a className="btn btn-primary" href="/" role="button">
          Open
        </a>
      </div>
      <div className="p-5 text-center" id="jumboTron">
        <h1 className="mb-3">David's Room</h1>
        <h4 className="mb-3">Status: Locked</h4>
        <a className="btn btn-primary" href="/" role="button">
          Open
        </a>
      </div>
    </div>
  );
}

export default Groups;
