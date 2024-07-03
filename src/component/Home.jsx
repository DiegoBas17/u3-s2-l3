import { Container, Dropdown } from "react-bootstrap";
import { Grid } from "react-bootstrap-icons";
import { JustifyLeft } from "react-bootstrap-icons";
import MyCarousel from "./MyCarousel";
/* import MySlick from "./MySlick"; */

const Home = () => {
  return (
    <main>
      <Container className="d-flex align-items-center justify-content-between">
        <div className="d-flex align-items-center mt-4">
          <h1 className="d-inline">TV Shows</h1>
          <Dropdown className="d-inline">
            <Dropdown.Toggle
              variant="Secondary"
              id="dropdown-basic"
              className="ms-2"
            >
              Genres
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Tv Shows</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Movies</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Recently Added</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
        <div>
          <Grid className="border border-1 p-2" width={40} height={30} />
          <JustifyLeft className="border border-1 p-2" width={40} height={30} />
        </div>
      </Container>
      <Container>
        <h2>Trending Now</h2>
        <MyCarousel
          nameFilm={"harry potter"}
          nameFilm1={"pokemon"}
          nameFilm2={"batman"}
        />
        <h2>Watch It Again</h2>
        <MyCarousel
          nameFilm={"batman"}
          nameFilm1={"harry potter"}
          nameFilm2={"pokemon"}
        />
        <h2>New Releases</h2>
        <MyCarousel
          nameFilm={"pokemon"}
          nameFilm1={"batman"}
          nameFilm2={"harry potter"}
        />
        {/*  <h2>Anime</h2>
          <MySlick nameFilm={"rocky"} /> */}
      </Container>
    </main>
  );
};
export default Home;
