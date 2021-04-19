import React from 'react';

function Navbar(props) {
  return (
    <div>
      <Random randomRadio={props.randomRadio}/>
      <Countries radioPerCountries={props.radioPerCountries}/>
      <Favorites favorites={props.favorites}/>
    </div>
  );
}

export default Navbar;