import Header from './Components/header'
import SearchBar from './Components/searchBar'
import NatureCardsList from './posts/natureCardsList.js'
import RelaxCardsList from './posts/relaxCardsList';
import ShopCardsList from './posts/shopCardsList';
import SportCardsList from './posts/sportCardsList';
import React, { useState } from "react";
import FoodsCardsList from './posts/foodsCardsList';
import FunCardsList from './posts/funCardsList';
import Images from './Components/images';
import Welcome from './Components/welcome';
import TopBar from "./Components/topBar"; 
import './App.css';

const App = () => {
  const [showFood, setShowFood] = useState(false);
  const [showFuns, setShowFuns] = useState(false);
  const [showNatures, setShowNatures] = useState(false);
  const [showRelaxes, setShowRelaxes] = useState(false);
  const [showShops, setShowShops] = useState(false);
  const [showSports, setShowSports] = useState(false);
  const [showWelcome, setShowWelcome] = useState(true);
  const processAttribute = (data) => {
    data = data.text.toLowerCase();
    console.log(data.text);
      setShowFood(false)
      setShowFuns(false)
      setShowShops(false)
      setShowRelaxes(false)
      setShowNatures(false)
      setShowSports(false)
      setShowWelcome(false)
    if (data === "food") {
      setShowFood(true)
      setShowWelcome(false)

    }
    else if (data === 'explore') {
      setShowFuns(true) 
      setShowWelcome(false)

    }
    else if (data === 'shop') {
      setShowShops(true)
      setShowWelcome(false)

    }
    else if (data === 'watch') {
      setShowRelaxes(true)
      setShowWelcome(false)

    }
    else if (data === 'nature') {
      setShowNatures(true)
      setShowWelcome(false)

    }
    else if (data === 'sport') {
      setShowSports(true)
      setShowWelcome(false)

    }
    else {
      setShowWelcome(true)
      alert("Please provide a valid attribute.")
    }
  }

  return (
    <>
      <>
        <TopBar />
        <div className="container-fluid row mx-auto">
          <div className="col-xl-6 col-lg-6 vertical">
            <Header />
            <SearchBar onSearch={processAttribute} />
          </div>
          <div className="images col-xl-6 col-lg 6">
            <Images />
          </div>
        </div>
        <div className="attractionBackground row mx-auto">
          {showWelcome ? <Welcome /> : null}
          {showFood ? <FoodsCardsList /> : null}
          {showFuns ? <FunCardsList /> : null}
          {showNatures ? <NatureCardsList /> : null}
          {showRelaxes ? <RelaxCardsList /> : null}
          {showShops ? <ShopCardsList /> : null}
          {showSports ? <SportCardsList /> : null}
        </div>
      </>
      <div className="container2">
        FBLA Coding &#38; Programming 2021-2022, Sooraj Tharumia
      </div>
    </>
  );
  }

export default App;