import Card from "react-bootstrap/Card";
import React, {useEffect, useState} from "react";
import Button from "react-bootstrap/Button";
import './posts.css';
  
export default function CardsList() {

  const [shops, setShops] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/")
      .then(res => res.json())
      .then((data) =>
        setShops(data));
  }, [shops]);

  {
    return shops.map(shop => {
      if (shop.category === "shops") {
        { var link = "http://maps.google.com/?q=" + shop.address; }
        return <Card style={{ width: "22rem" }} className="cardBorder cardContent">
          <Card.Body className='vertical'>
            <Card.Title>
              <h1 className='title'><a href={shop.website}>{shop.name}</a></h1>
              <p>Address: {shop.address}</p>
              <p>Phone Number: {shop.phone_number}</p>
            </Card.Title>
            <Button className="btn btn-block btn-success">
              <a className='directionsBtn' href={link}>Get Directions</a>
            </Button>
          </Card.Body>
        </Card>
      }
    })}
}
