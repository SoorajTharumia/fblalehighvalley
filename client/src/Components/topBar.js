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
    fetch(`${api.base}weather?q=Allentown&units=imperial&APPID=${api.key}`)
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
      {typeof weather.main != "undefined" ? (
        <Navbar className="navigation navbar-dark" expand="lg">
          <Container>
            <Navbar.Brand className="brand">
              <em style={{ color: "#edf2f4" }}>Lehigh Valley Tourism Bureau</em>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="ms-auto navbar-dark">
                <NavDropdown
                  title={
                    <div className="weatherIcon">
                      <img
                        src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}.png`}
                      />
                      {Math.floor(weather.main.temp)} &deg;F
                    </div>
                  }
                  id="collapsible-nav-dropdown"
                  drop="start"
                >
                  <NavDropdown.Item>
                    <h2 className="locationWeather">Lehigh Valley Weather</h2>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    Current Temperature:{" "}
                    <span>{Math.round(weather.main.temp)} &deg;F</span>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    Feels Like:{" "}
                    <span>{Math.round(weather.main.feels_like)} &deg;F</span>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    Current Conditions:{" "}
                    <span>
                      {weather.weather[0].description.charAt(0).toUpperCase() +
                        weather.weather[0].description.slice(1)}
                    </span>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    Wind Speed: <span>{weather.wind.speed} mph</span>
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      ) : (
        <div></div>
      )}
    </div>
  );
};


export default TopBar;
