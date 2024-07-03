import { Component } from "react";
/* import React from "react"; */
import { Spinner } from "react-bootstrap";
import Slider from "react-slick";
/* import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"; */

class MySlick extends Component {
  state = {
    arrayFilms: [],
    isLoading: true,
  };
  settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 6,
    slidesToScroll: 1,
  };

  fetchFilms = () => {
    fetch(`http://www.omdbapi.com/?apikey=f1416e37&s=${this.props.nameFilm}`)
      .then((resp) => {
        if (resp.ok) {
          return resp.json();
        } else {
          throw new Error("Errore nel reperimento dei dati");
        }
      })
      .then((objFilm) => {
        console.log(objFilm);
        if (objFilm.Search) {
          this.setState({ arrayFilms: objFilm.Search, isLoading: false });
        }
      })
      .catch((err) => alert(err));
  };
  componentDidMount() {
    this.fetchFilms();
  }
  render() {
    const { arrayFilms } = this.state;
    return (
      <Slider {...this.settings}>
        {this.state.isLoading ? (
          <Spinner animation="border" role="status" variant="info">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        ) : (
          arrayFilms.map((film, index) => (
            <a href="#" className="px-2" key={index}>
              <img
                src={film.Poster}
                alt="immagine film"
                className="w-100"
                height={300}
              />
            </a>
          ))
        )}
      </Slider>
    );
  }
}
export default MySlick;
