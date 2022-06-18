import Card from "react-bootstrap/Card";
import React, {useEffect, useState} from "react";
import Button from "react-bootstrap/Button";
import './posts.css';
  
export default function CardsList() {

  const [relaxes, setRelaxes] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/")
      .then(res => res.json())
      .then((data) =>
        setRelaxes(data));
  }, [relaxes]);

  {
    return relaxes.map(relax => {
      if (relax.category === "relaxes") {
        { var link = "http://maps.google.com/?q=" + relax.address; }
        return <Card style={{ width: "22rem" }} className="cardBorder cardContent">
          <Card.Body className='vertical'>
            <Card.Title>
              <h1 className='title'><a href={relax.website}>{relax.name}</a></h1>
              <p>Address: {relax.address}</p>
              <p>Playing Shows: {relax.top_movies}</p>
            </Card.Title>
            <Button className="btn btn-block btn-success">
              <a className='directionsBtn' href={link}>Get Directions</a>
            </Button>
          </Card.Body>
        </Card>
      }
    })}
}
