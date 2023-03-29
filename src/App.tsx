import "./App.scss";
import "./style.css";

import MainPart from './components/Main/Main';
import Footer from './components/Footer/Footer';
import { MovieDetails } from "./components/MovieDetails/MovieDetails";
import { useState } from "react";

import Image from "./components/MovieCard/Bitmap.png";
import { Button } from "./components/Button/Button";
import { ConfirmationModal } from "./components/Modals/ConfirmationModal/ConfirmationModal";
import { ModelBase } from "./components/Modals/ModalBase/ModalBase";

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
      <MovieDetails {...movieDetails}/>
      <hr className="app__divider"/>
      <MainPart />
      <Footer />
      <ModelBase onClose={() => {console.log("close")}}>
        <Button isPrimary={true} text="primary" onClick={() => {console.log("primary")}}></Button>
        <Button isPrimary={false} text="secondary" onClick={() => {console.log("secondary")}}></Button>
      </ModelBase>
      <ConfirmationModal title="Remove movie" onClose={() => {console.log("close")}} onConfirm={() => {console.log("close")}}>
        g4gtewfwgw5gw5gaddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddc
        accccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccd
        acccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccd
        sfvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
        sfvsfvsfvsfvsfvssvsfsvsvsvsvvsvsfsfvs
      </ConfirmationModal>
    </div>
  );
}

export default App;
