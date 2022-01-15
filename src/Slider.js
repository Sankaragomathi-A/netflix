import React, { useEffect, useState } from "react";
import "./Slider.css";
import Card from "./Card";
import Carousel from "react-elastic-carousel";
import Details from "./Details";
// import { cleanup } from "@testing-library/react";

const movies = [
  {
    
      "Title": "Star Wars: Episode IV - A New Hope",
      "Year": "1977",
      "imdbID": "tt0076759",
       "Type": "movie",
      "imageDetailsBg":"https://wallpapercave.com/wp/NMaWhm1.jpg",
      "Poster": "https://m.media-amazon.com/images/M/MV5BNzVlY2MwMjktM2E4OS00Y2Y3LWE3ZjctYzhkZGM3YzA1ZWM2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"
  },
  {
      "Title": "Star Wars: Episode V - The Empire Strikes Back",
      "Year": "1980",
      "imdbID": "tt0080684",
      "Type": "movie",
      "imageDetailsBg":"https://kgsmovierants.files.wordpress.com/2015/12/empire-strikes-back-03.jpg",
      "Poster": "https://m.media-amazon.com/images/M/MV5BYmU1NDRjNDgtMzhiMi00NjZmLTg5NGItZDNiZjU5NTU4OTE0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"
  },
  {
      "Title": "Star Wars: Episode VI - Return of the Jedi",
      "Year": "1983",
      "imdbID": "tt0086190",
      "Type": "movie",
      "imageDetailsBg":"https://wallpapercave.com/wp/wp5981524.jpg",
     "Poster": "https://m.media-amazon.com/images/M/MV5BOWZlMjFiYzgtMTUzNC00Y2IzLTk1NTMtZmNhMTczNTk0ODk1XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg"
  },
  {
    "Title": "Star Wars: Episode I - The Phantom Menace",
    "Year": "1999",
    "imdbID": "tt0120915",
    "Type": "movie",
    "imageDetailsBg":"https://static.sweet.tv/images/cache/movie_banners/BCGX4EQCMVXCAAQ=/16141-zvezdnye-voyny-epizod-1-skrytaya-ugroza_1280x720.jpg",
    "Poster": "https://m.media-amazon.com/images/M/MV5BYTRhNjcwNWQtMGJmMi00NmQyLWE2YzItODVmMTdjNWI0ZDA2XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg"
},
{
    "Title": "Star Wars: Episode III - Revenge of the Sith",
    "Year": "2005",
    "imdbID": "tt0121766",
    "Type": "movie",
    "imageDetailsBg":"",
    "Poster": "https://m.media-amazon.com/images/M/MV5BNTc4MTc3NTQ5OF5BMl5BanBnXkFtZTcwOTg0NjI4NA@@._V1_SX300.jpg"
},
  {
      "Title": "Star Wars: Episode VII - The Force Awakens",
      "Year": "2015",
      "imdbID": "tt2488496",
      "imageDetailsBg":"https://i.ytimg.com/vi/sGbxmsDFVnE/maxresdefault.jpg",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BOTAzODEzNDAzMl5BMl5BanBnXkFtZTgwMDU1MTgzNzE@._V1_SX300.jpg"
  },
 
  {
      "Title": "Star Wars: Episode II - Attack of the Clones",
      "Year": "2002",
      "imdbID": "tt0121765",
      "imageDetailsBg":"https://wallpapercave.com/wp/wp3054761.jpg",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMDAzM2M0Y2UtZjRmZi00MzVlLTg4MjEtOTE3NzU5ZDVlMTU5XkEyXkFqcGdeQXVyNDUyOTg3Njg@._V1_SX300.jpg"
  },
  
  {
      "Title": "Rogue One: A Star Wars Story",
      "Year": "2016",
      "imdbID": "tt3748528",
      "imageDetailsBg":"https://wallpapercave.com/wp/wp2683790.jpg",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMjEwMzMxODIzOV5BMl5BanBnXkFtZTgwNzg3OTAzMDI@._V1_SX300.jpg"
  },
  {
      "Title": "Star Wars: Episode IX - The Rise of Skywalker",
      "Year": "2019",
      "imdbID": "tt2527338",
      "imageDetailsBg":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkCfn0gopXWq8QpSibhAOu-YcGrWpni_e19Q&usqp=CAU",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMDljNTQ5ODItZmQwMy00M2ExLTljOTQtZTVjNGE2NTg0NGIxXkEyXkFqcGdeQXVyODkzNTgxMDg@._V1_SX300.jpg"
  }
]

const Slider = () => {

  
  const [button, setbutton] = useState(false);
  const [state, setState] = useState();

  useEffect(() => {
    setState(state);
    return () => {};
  }, [state]);

  let arr = [];
  const handleClick = (i, e) => {
    //index postion on array= i which we get onclick from the movies.map
    arr = [i];
    setState(i);
    setbutton(!button);
  };

  const hey = () => {};



  const movieID=state;
  const movieClicks=[
      movies[movieID]
  ]




  const breakpoints = [
    { width: 1, itemsToShow: 1 },
    { width: 500, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
  ];






  return (
    <div className="slider">
      <Carousel breakPoints={breakpoints}>
        {movies.map((movie, i) => (
          <span key={i}>
            <button
              className="button3"
              onClick={(hey(), handleClick.bind(this, i))}
            >
              <Card
                movie={movie}
                title={movie.Title}
                image={movie.Poster}
              ></Card>
            </button>
          </span>
        ))}
      </Carousel>

            {button && movieClicks.map((movieClicks,i)=>(
                <span key={i}>
                    <Details title={movieClicks.Title}  imageDetailsBg={movieClicks.imageDetailsBg}  image={movieClicks.Poster} videoID={movieClicks.imdbID}>item</Details>
                </span>
            ))}


    </div>
  );
};
export default Slider;
