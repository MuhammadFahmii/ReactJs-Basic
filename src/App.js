import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/lib/integration/react";
import { persistor, store } from "./components/stores/store";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Home from "./components/home/Home";
import NotFound from "./components/notfound/NotFound";
import Pendaftaran from "./components/pendaftaran/Pendaftaran";
import ContactUs from "./components/contact-us/Contact-us";
import ReviewMessage from "./components/review-message/Review-Message";
import CariFilm from "./components/cari-film/CariFilm";
import Todo from "./components/todo/Todo";
import { Container } from "react-bootstrap";

function App() {
  return (
    <Router>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/todo" element={<Todo />}></Route>
            <Route path="/pendaftaran" element={<Pendaftaran />}></Route>
            <Route path="/contact-us" element={<ContactUs />}></Route>
            <Route path="/review-message" element={<ReviewMessage />}></Route>
            <Route path="/cari-film" element={<CariFilm />}></Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </PersistGate>
      </Provider>
    </Router>
  );
}

export default App;
