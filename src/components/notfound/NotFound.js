import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import MainNavbar from "../main-navbar/MainNavbar";

export default function NotFound() {
  return (
    <>
      <MainNavbar />
      <Container>
        <h1>Halaman not found</h1>
        <Link to="/" className="btn btn-primary">
          Kembali
        </Link>
      </Container>
    </>
  );
}
