import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import CommentsFilm from "./CommentsFilm";

const MovieDetails = () => {
  const param = useParams();
  const [objFilm, setObjFilm] = useState("");
  /* console.log(param.id); */
  const filmId = param.id;
  const fetchFilm = () => {
    fetch(`http://www.omdbapi.com/?apikey=f1416e37&i=${filmId}`)
      .then((resp) => {
        if (resp.ok) {
          return resp.json();
        } else {
          throw new Error("Errore nel reperimento dei dati");
        }
      })
      .then((objFilm) => {
        if (objFilm) {
          setObjFilm(objFilm);
        }
      })
      .catch((err) => alert(err));
  };
  useEffect(() => {
    fetchFilm();
  }, []);
  return (
    <Container>
      <h1>{objFilm.Title}</h1>
      <img src={objFilm.Poster} alt="" />
      <p>{`Data di uscita:${objFilm.Released}`}</p>
      <p>{`Genere:${objFilm.Genre}`}</p>
      <p>{`Durata:${objFilm.Runtime}`}</p>
      <p>{`Diretto da:${objFilm.Director}`}</p>
      <p>{`Scritto da:${objFilm.Writer}`}</p>
      <p>{`Attori:${objFilm.Actors}`}</p>
      <p>{`Trama:${objFilm.Plot}`}</p>
      <p>{`Lingue:${objFilm.Language}`}</p>
      <p>{`Premi:${objFilm.Awards}`}</p>
      <CommentsFilm idFilm={filmId} />
    </Container>
  );
};
export default MovieDetails;
