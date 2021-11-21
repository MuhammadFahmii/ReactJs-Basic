import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function MainNavbar() {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto ">
          <Link to="/" className="mx-3 text-decoration-none">
            Home
          </Link>
          <Link to="/about" className="mx-3 text-decoration-none">
            About
          </Link>
          <Link to="/pendaftaran" className="mx-3 text-decoration-none">
            Pendaftaran
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
