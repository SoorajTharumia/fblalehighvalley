import Card from "react-bootstrap/Card";
import React, {useEffect, useState} from "react";
import Button from "react-bootstrap/Button";
import './posts.css';
  
export default function CardsList() {

  const [relaxes, setRelaxes] = useState([]);

  useEffect(() => {
    fetch("https://fblaserver.herokuapp.com/")
      .then(res => res.json())
      .then((data) =>
        setRelaxes(data));
  }, []);

  useEffect(() => {
    console.log(relaxes);
  });

  {
    return relaxes.map(relax => {
      if (relax.category === "relaxes") {
        { var link = "http://maps.google.com/?q=" + relax.address; }
        return (
          <Card style={{ width: "22rem" }} className="cardBorder cardContent">
            <Card.Body className="vertical">
              <Card.Title>
                <h1 className="title">
                  <a href={relax.website} target="_blank" rel="noreferrer">
                    {relax.name}
                  </a>
                </h1>
                <p>Address: {relax.address}</p>
                <p>Screen Sizes: {relax.screen_sizes}</p>
              </Card.Title>
              <Button className="btn btn-block btn-success">
                <a
                  className="directionsBtn"
                  href={link}
                  target="_blank"
                  rel="noreferrer"
                >
                  Get Directions
                </a>
              </Button>
            </Card.Body>
          </Card>
        );
      }
    })}
}
