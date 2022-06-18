import Card from "react-bootstrap/Card";
import React, {useEffect, useState} from "react";
import Button from "react-bootstrap/Button";
import './posts.css';
  
export default function CardsList() {

  const [foods, setFoods] = useState([]);

  useEffect(() => {
    fetch("https://fblaserver.herokuapp.com/")
      .then(res => res.json())
      .then((data) =>
        setFoods(data));
  }, [foods]);

  {
    return foods.map(food => {
      if (food.category === "foods") {
        { var link = "http://maps.google.com/?q=" + food.address; }
        return <Card style={{ width: "22rem" }} className="cardBorder cardContent">
          <Card.Body className='vertical'>
            <Card.Title>
              <h1 className='title'><a href={food.website}>{food.name}</a></h1>
              <h2>Cuisine Type: {food.cuisine}</h2>
              <p>Address: {food.address}</p>
              <p>Price Range (out of 4): {food.price}</p>
            </Card.Title>
            <Button className="btn btn-block btn-success">
              <a className='directionsBtn' href={link}>Get Directions</a>
            </Button>
          </Card.Body>
        </Card>
      }
    })}
}
