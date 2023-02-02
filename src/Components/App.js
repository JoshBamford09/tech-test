import React from 'react';
import '../Styles/app.css';
import SearchComponent from "../Components/Search"
import NasaLogo from "../Images/nasa.jpg"

const App = () => {
  return (
    <div className='app'>
      <img calssName="" src={NasaLogo} alt='Nasa Logo' />
      <SearchComponent />
    </div>
  );
}

export default App;
