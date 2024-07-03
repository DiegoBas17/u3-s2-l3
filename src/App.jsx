import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import TopBar from "./component/TopBar";
import Home from "./component/Home";
import MyFooter from "./component/MyFooter";
import TvShow from "./component/TvShow";
import ProfilePage from "./component/ProfilePage";
import SettingPage from "./component/SettingPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MovieDetails from "./component/MovieDetails";

function App() {
  return (
    <div className="App" data-bs-theme="dark">
      <BrowserRouter>
        <TopBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile-page" element={<ProfilePage />} />
          <Route path="/setting" element={<SettingPage />} />
          <Route path="/tv-show" element={<TvShow />} />
          <Route
            path="/the-show/movie-details/:id"
            element={<MovieDetails />}
          />
        </Routes>
        <MyFooter />
      </BrowserRouter>
    </div>
  );
}

export default App;
