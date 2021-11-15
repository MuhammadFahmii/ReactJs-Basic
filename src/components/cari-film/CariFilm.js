import { useState } from "react";
import MainNavbar from "../main-navbar/MainNavbar";

export default function CariFilm() {
  const [movies, setMovies] = useState();
  const [title, setTitle] = useState();
  const API_KEY = "93433d58";
  const getMovie = async () => {
    const response = await fetch(
      `http://www.omdbapi.com/?apikey=${API_KEY}&s=${title}`
    );
    const { Search } = await response.json();
    console.log(Search);
    setMovies(Search);
    setTitle("");
  };

  return (
    <>
      <MainNavbar />
      <div className="container">
        <div className="row mt-5">
          <div className="col">
            <h3>Cari Film</h3>
          </div>
        </div>
        <div className="row">
          <div className="col-md-8">
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control input-keyword"
                placeholder="Search Movie..."
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
              <div className="input-group-append">
                <button
                  className="btn btn-primary"
                  type="button"
                  onClick={getMovie}
                >
                  search
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          {movies?.map(({ Poster, Title, Year }, i) => {
            return (
              <div className="col-md-3 my-3" key={i}>
                <div className="card">
                  <img src={Poster} alt="image-not-available" />
                  <div className="card-body">
                    <h5 className="card-title">{Title}</h5>
                    <h6 className="card-subtittle mb-2 text-muted">{Year}</h6>
                    <a
                      className="btn btn-primary modal-detail"
                      data-toggle="modal"
                      data-target="#movieDetail"
                    >
                      Show Detail
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
