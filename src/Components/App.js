import React from 'react';
import '../Styles/app.css';
import SearchComponent from "../Components/Search"

const App = () => {
  return (
    <div className='app'>
      <img calssName="" src="https://cdn.cnn.com/cnnnext/dam/assets/200424060716-nasa-worm-logo.jpg" alt='Nasa Logo' />
      <SearchComponent />
    </div>
  );
}

export default App;
