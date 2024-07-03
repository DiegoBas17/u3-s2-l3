import { Component } from "react";
import MyCarouselItem from "./MyCorouselItem";
import { Carousel } from "react-bootstrap";

class MyCarousel extends Component {
  /* prova per rendere responsive il carosello */ /* fallita! */
  /*  state = {
    indexE: 0,
  }; */

  /*   getIndex = () => {
    const width = window.innerWidth;
    if (width < 576) {
      this.setState({ indexE: 0 }); // XS
    } else if (width < 768) {
      this.setState({ indexE: 1 }); // SM
    } else if (width < 992) {
      this.setState({ indexE: 4 }); // MD
    } else if (width < 1200) {
      this.setState({ indexE: 5 }); // LG
    } else {
      this.setState({ indexE: 5 }); // XL
    }
  }; */

  render() {
    return (
      <>
        <Carousel fade>
          <Carousel.Item interval={2000}>
            <MyCarouselItem
              nameFilm={this.props.nameFilm}
              indexS={0}
              indexE={6}
            />
          </Carousel.Item>
          <Carousel.Item interval={2000}>
            <MyCarouselItem
              nameFilm={this.props.nameFilm1}
              indexS={0}
              indexE={6}
            />
          </Carousel.Item>
          <Carousel.Item interval={2000}>
            <MyCarouselItem
              nameFilm={this.props.nameFilm2}
              indexS={0}
              indexE={6}
            />
          </Carousel.Item>
        </Carousel>
      </>
    );
  }
}
export default MyCarousel;
