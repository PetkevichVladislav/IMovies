import "./App.scss";
import "./style.css";

import { MovieListPage } from "./components/MovieListPage/MovieListPage";

export const App = () => {
  return (
    <div className="app">
      <MovieListPage/>
    </div>
  );
}
