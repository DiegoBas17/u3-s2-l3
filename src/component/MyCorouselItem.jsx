import { Component } from "react";
import { Col, Row, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";

class MyCarouselItem extends Component {
  state = {
    arrayFilms: [],
    isLoading: true,
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
        console.log(this.props.nameFilm + objFilm.Search);
        console.log(objFilm.Search);
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
      <Row className=" g-1">
        {this.state.isLoading ? (
          <Spinner animation="border" role="status" variant="info">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        ) : (
          arrayFilms
            .slice(this.props.indexS, this.props.indexE)
            .map((film, index) => (
              <Col
                key={index}
                className={
                  index === 4
                    ? "d-none d-xl-block"
                    : index === 3
                    ? "d-none d-lg-block"
                    : index === 2
                    ? "d-none d-md-block"
                    : index === 1
                    ? "d-none d-sm-block"
                    : ""
                }
              >
                <Link to={`/the-show/movie-details/` + film.imdbID}>
                  <img
                    src={film.Poster}
                    alt={film.Title}
                    crossOrigin="anonymous"
                    className="img-fluid"
                    style={{ objectFit: "cover" }}
                  />
                </Link>
              </Col>
            ))
        )}
      </Row>
    );
  }
}
export default MyCarouselItem;
