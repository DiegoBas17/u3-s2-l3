import { useEffect, useState } from "react";
import { Accordion, Badge, Button } from "react-bootstrap";
import { Trash3 } from "react-bootstrap-icons";

const CommentsFilm = (props) => {
  const [commenti, setCommenti] = useState([]);

  const fetchComments = () => {
    fetch(
      "https://striveschool-api.herokuapp.com/api/comments/" + props.idFilm,
      {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjdkNWI0NDNhMzhjYjAwMTVmNjNjZjIiLCJpYXQiOjE3MTk0OTEzOTYsImV4cCI6MTcyMDcwMDk5Nn0.LDXvAzpXS0c_jlmLQEYfFPW6AtZZGHZZ5chs8xkBFzI",
        },
      }
    )
      .then((resp) => {
        if (resp.ok) {
          return resp.json();
        } else {
          throw new Error("Errore nel reperimento dei commenti");
        }
      })
      .then((arrayComment) => {
        console.log(arrayComment);
        setCommenti(arrayComment);
      })
      .catch((err) => alert(err));
  };

  useEffect(() => {
    fetchComments();
  }, []);

  return (
    <Accordion className="border border-1">
      {commenti.map((commento, index) => {
        <Accordion.Item key={index}>
          <Accordion.Header>{commento.comment}</Accordion.Header>
          <Accordion.Body className="d-flex justify-content-between">
            <p className="mb-0 d-inline">{commento.elementId}</p>
            <Badge className="d-inline ms-auto pt-2">{commento.rate}</Badge>
            <Button variant="danger" size="sm" /* onClick={deleteComment} */>
              <Trash3 />
            </Button>
          </Accordion.Body>
        </Accordion.Item>;
      })}
    </Accordion>
  );
};
export default CommentsFilm;
