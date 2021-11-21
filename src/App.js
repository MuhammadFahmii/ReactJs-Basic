import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/lib/integration/react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MainNavbar from "./components/main-navbar/MainNavbar";
import Home from "./components/home/Home";
import NotFound from "./components/notfound/NotFound";
import Pendaftaran from "./components/pendaftaran/Pendaftaran";
import { persistor, store } from "./components/stores/store";

function App() {
  return (
    <Router>
      <MainNavbar />
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pendaftaran" element={<Pendaftaran />}></Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </PersistGate>
      </Provider>
    </Router>
  );
}

export default App;
