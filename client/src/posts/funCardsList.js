import Card from "react-bootstrap/Card";
import React, {useEffect, useState} from "react";
import Button from "react-bootstrap/Button";
import './posts.css';

  
export default function CardsList() {

  const [funs, setFuns] = useState([]);

  useEffect(() => {
    fetch("https://fblaserver.herokuapp.com/")
      .then(res => res.json())
      .then((data) =>
        setFuns(data));
  }, []);

  useEffect(() => {
    console.log(funs);
  });

  {
    return funs.map(fun => {
      if (fun.category === "funs") {
        { var link = "http://maps.google.com/?q=" + fun.address; }
        return (
          <Card style={{ width: "22rem" }} className="cardBorder cardContent">
            <Card.Body className="vertical">
              <Card.Title>
                <h1 className="title">
                  <a href={fun.website} target="_blank" rel="noreferrer">
                    {fun.name}
                  </a>
                </h1>
                <h2>Tickets Required: {fun.tickets}</h2>
                <p>Address: {fun.address}</p>
                <p>Phone Number: {fun.phone_number}</p>
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
