import "./Groups.css";
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Groups() {
  return (
    <div id="grpBody">
      <Navbar expand="lg" id="topNav" variant="dark">
      <Container>
        <i class="fa-sharp fa-solid fa-house-lock"></i>
        <Navbar.Brand href="/" style={{color: "white"}}> Smart-Door-Lock</Navbar.Brand>
        {/* <Navbar.Toggle aria-controls="basic-navbar-nav" style={{color: "white"}}/> */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to="/create"><Nav.Link href="/" style={{color: "aliceblue"}}>Create-Group</Nav.Link></Link>
            <Link to="/join"><Nav.Link href="/" style={{color: "aliceblue"}}>Join-Group</Nav.Link></Link>
            <Nav.Link href="/" style={{color: "aliceblue"}}>Log Out</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      <div class="p-5 text-center jumboTron">
        <h1 class="mb-3">David's Room</h1>
        <h4 class="mb-3">Status: Locked</h4>
        <a class="btn btn-primary" href="/" role="button">
          Open
        </a>
      </div>
      <div class="p-5 text-center jumboTron">
        <h1 class="mb-3">David's Room</h1>
        <h4 class="mb-3">Status: Locked</h4>
        <a class="btn btn-primary" href="/" role="button">
          Open
        </a>
      </div>
      <div class="p-5 text-center jumboTron">
        <h1 class="mb-3">David's Room</h1>
        <h4 class="mb-3">Status: Locked</h4>
        <a class="btn btn-primary" href="/" role="button">
          Open
        </a>
      </div>
    </div>
  );
}

export default Groups;
