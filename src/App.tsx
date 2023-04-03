import "./App.scss";
import "./style.css";

import { useState } from "react";
import MainPart from './components/Main/Main';
import Header from "./components/Header/Header";
import Footer from './components/Footer/Footer';
import Image from "./components/MovieCard/Bitmap.png";
import { MovieDetails } from "./components/MovieDetails/MovieDetails";

function App() {
  const [movieDetails, setMovieDetails] = useState({
    imageUrl: Image,
    movieName: 'Example Movie',
    releaseYear: '2022',
    movieGenres: ['Action', 'Drama'],
    rating: 7.8,
    duration: "2h 34min",
    description: "Jules Winnfield (Samuel L. Jackson) and Vincent Vega (John Travolta) are two hit men who are out to retrieve a suitcase stolen from their employer, mob boss Marsellus Wallace (Ving Rhames). Wallace has also asked Vincent to take his wife Mia (Uma Thurman) out a few days later when Wallace himself will be out of town. Butch Coolidge (Bruce Willis) is an aging boxer who is paid by Wallace to lose his fight. The lives of these seemingly unrelated people are woven together comprising of a series of funny, bizarre and uncalled-for incidents.—Soumitra"
  });

  return (
    <div className="app">
      <Header/>
      <hr className="app__divider"/>
      <MainPart />
      <Footer />
    </div>
  );
}

export default App;
