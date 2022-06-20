import React, { useState, useEffect } from 'react'
import { Nav, Navbar, NavDropdown, Container } from 'react-bootstrap';
import './topBar.css';

export const TopBar = () => {
  const api = {
    key: "e973687684a32f5b2f4bccca7c925f51",
    base: "https://api.openweathermap.org/data/2.5/",
  };

  const [weather, setWeather] = useState({});

  useEffect(() => {
    fetch(`${api.base}weather?q=Allentown&units=metric&APPID=${api.key}`)
      .then((res) => res.json())
      .then((data) => {
        setWeather(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    console.log(weather);
  });

  return (
    <div>
      <Navbar className="navigation" expand="lg">
        <Container>
          <Navbar.Brand>Lehigh Valley Tourism Bureau</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavDropdown
                title="Weather in the Lehigh Valley!"
                id="basic-nav-dropdown"
              >
                
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};


export default TopBar;
