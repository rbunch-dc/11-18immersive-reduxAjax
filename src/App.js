import React, { Component } from 'react';
import './App.css';
import SearchBar from './containers/SearchBar';
import Weather from './containers/Weather';
import Stocks from './containers/Stocks';

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <SearchBar />
        <div className="col-sm-6">
          <Weather />
        </div>
        <div className="col-sm-6">
          <Stocks />
        </div>        
      </div>
    );
  }
}

export default App;
