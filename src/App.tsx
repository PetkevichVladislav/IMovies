import "./App.scss";
import "./style.css";

import Header from "./components/Header/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MovieDetailsLoader } from "./components/MovieLoaders/MovieDetailsLoader";
import { MovieListPage } from "./components/MovieListPage/MovieListPage";
import { CreateMovieModal } from "./components/Modals/CreateMovieModal/CreateMovieModal";
import { EditMovieModalLoader } from "./components/MovieLoaders/MovieModalLoader";
import { RemoveMovieModal } from "./components/Modals/RemoveMovieModal/RemoveMovieModal";

export const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MovieListPage />}>
            <Route path=":id" element={<MovieDetailsLoader />} />
            <Route path="" element={<Header />}>
              <Route path="/new" element={<CreateMovieModal
                isOpened
                title="add movie"
                movie={null} />}
              />
              <Route path="/:id/edit" element={<EditMovieModalLoader />} />
              <Route path="/:id/remove" element={<RemoveMovieModal/>} />
            </Route>
          </Route>
          <Route path="*" element={<div>error</div>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}