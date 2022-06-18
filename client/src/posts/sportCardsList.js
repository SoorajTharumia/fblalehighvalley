import Card from "react-bootstrap/Card";
import React, {useEffect, useState} from "react";
import Button from "react-bootstrap/Button";
import './posts.css';
  
export default function CardsList() {

  const [sports, setSports] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/")
      .then(res => res.json())
      .then((data) =>
        setSports(data));
  }, [sports]);

  {
    return sports.map(sport => {
      if (sport.category === "sports") {
        { var link = "http://maps.google.com/?q=" + sport.address; }
        return <Card style={{ width: "22rem" }} className="cardBorder cardContent">
          <Card.Body className='vertical'>
            <Card.Title>
              <h1 className='title'><a href={sport.website}>{sport.name}</a></h1>
              <p>Address: {sport.address}</p>
              <p>Team: {sport.team}</p>
              <p>Sport: {sport.sport}</p>
            </Card.Title>
            <Button className="btn btn-block btn-success">
              <a className='directionsBtn' href={link}>Get Directions</a>
            </Button>
          </Card.Body>
        </Card>
      }
    })}
}
