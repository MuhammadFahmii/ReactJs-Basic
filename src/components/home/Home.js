import { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import MainNavbar from "../main-navbar/MainNavbar";
import "./Home.css";
export default function Home() {
  const [date, setDate] = useState(new Date());

  function refreshClock() {
    setDate(new Date());
  }
  useEffect(() => {
    const timerId = setInterval(refreshClock, 1000);
    return function cleanup() {
      clearInterval(timerId);
    };
  }, []);
  return (
    <>
      <MainNavbar />
      <Container fluid>
        <div class="jumbotron">
          <div class="row">
            <div class="col mt-5 ms-5">
              <img
                class="rounded-circle jumbo-image"
                src="assets/matthew-hamilton-tNCH0sKSZbA-unsplash.jpg"
                alt=""
              />
            </div>
            <div class="col m-auto txt-home">
              <span>{date.toLocaleTimeString()}</span>
              <h3>Hi, my name is</h3>
              <h1>Anne Sulivan</h1>
              <h2>I build things for the web</h2>
              <button type="button" className="btn btn-primary rounded-pill">
                <a href="#" className="text-white text-decoration-none">
                  Get In Touch
                </a>
              </button>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
