import Card from "react-bootstrap/Card";
import React, {useEffect, useState} from "react";
import Button from "react-bootstrap/Button";
import './posts.css';
  
export default function CardsList() {

  const [natures, setNatures] = useState([]);

  useEffect(() => {
    fetch("https://fblaserver.herokuapp.com/")
      .then(res => res.json())
      .then((data) =>
        setNatures(data));
  }, [natures]);

  {
    return natures.map(nature => {
      if (nature.category === "natures") {
      
        { var link = "http://maps.google.com/?q=" + nature.address; }
        return <Card style={{ width: "22rem" }} className="cardBorder cardContent">
          <Card.Body className='vertical'>
            <Card.Title>
              <h1 className='title'><a href={nature.website}>{nature.name}</a></h1>
              <p>Address: {nature.address}</p>
              <p>Things To Do: {nature.things_to_do}</p>
            </Card.Title>
            <Button className="btn btn-block btn-success">
              <a className='directionsBtn' href={link}>Get Directions</a>
            </Button>
          </Card.Body>
        </Card>
      }
    })}
}
