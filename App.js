import React, { useEffect, useState } from 'react';

function App() {
  let [allRadios, setAllRadios] = useState({})
  let [selectedCountry, setSelectedCountry] = useState('')
  let [top10, setTop10] = useState([])
  let [selectedRadio, setSelectedRadio] = useState('')
  let [favorites, setFavorites] = useState([])

  const userCountryChoice = (country) => {
    // I'll receive a country from the map
    // I do an API call to radio stations with that country
    // I store HERE radios from that country with setSelectedCountry and setSelectedRadio
  }

  const giveMeTop10 = () => {
    // based on a radio, will give me the top 10 of that country
  }

  useEffect(() => {
    // we call all the radios of the world and maybe another to get per country
    // set all radios
  }, [])

  const getRandomRadio = () => {
    // random of all radios
  }

  const addFavorite = () => {
    // manage favorites
  }

  return (
    <div>
      <Navbar addFavorite={addFavorite} randomRadio={randomRadio} radioPerCountries={radioPerCountry}/>
      <Map setSelectedCountry={setSelectedCountry}/>
      {
        showTop10 || showFavorites || showCountriesRadios &&
          <Popup addFavorite={addFavorite} top10={top10} setSelectedRadio={setSelectedRadio}/>
      }
      {
        selectedRadio &&
        <Player addFavorite={addFavorite} selectedRadio={selectedRadio}/>
      }
    </div>
  );
}

export default App;