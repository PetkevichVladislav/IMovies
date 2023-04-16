import "./App.scss";
import "./style.css";

import { MovieListPage } from "./components/MovieListPage/MovieListPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import { MovieDetails } from "./components/MovieDetails/MovieDetails";
import { MovieLoader } from "./components/MovieLoader/MovieLoader";

export const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<MovieListPage/>}>
          <Route path=":id" element={<MovieLoader/>} />
          <Route path="/" element={<Header/>} />
        </Route>
        <Route path="*" element={<div>error</div>}/>
      </Routes>
    </BrowserRouter>
    </div>
  );
}