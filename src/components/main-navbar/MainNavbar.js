import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function MainNavbar() {
  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Brand href="/">
          <img
            src="assets/logo-ALTA.png"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
        </Navbar.Brand>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto ">
            <Link to="/" className="mx-3 text-decoration-none">
              Home
            </Link>
            <Link to="/todo" className="mx-3 text-decoration-none">
              Todo
            </Link>
            <Link to="/about" className="mx-3 text-decoration-none">
              About
            </Link>
            <Link to="/pendaftaran" className="mx-3 text-decoration-none">
              Pendaftaran
            </Link>
            <Link to="/contact-us" className="mx-3 text-decoration-none">
              Contact Us
            </Link>
            <Link to="/cari-film" className="mx-3 text-decoration-none">
              Cari Film
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
