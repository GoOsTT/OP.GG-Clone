import React from 'react';
import './App.css';
import Navbar1 from './Components/NavBar/navbar'
import SearchBar from '../src/Components/SearchBar/SearchBar'
import FetchData from './Components/FetchData/FetchData'




class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div>
          <Navbar1 />
          <SearchBar />
          <FetchData />
        </div>
      </div>
    );
  }
 
}

export default App;
