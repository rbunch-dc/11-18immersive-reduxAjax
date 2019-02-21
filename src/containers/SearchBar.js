import React, { Component } from 'react';

class SearchBar extends Component{
    render(){
        return(
			<nav className="navbar navbar-inverse">
			  <div className="container-fluid">
			    <div className="navbar-header">
			      <a className="navbar-brand" href="#">WebSiteName</a>
			    </div>
			    <ul className="nav navbar-nav">
			      <li className="active"><a href="#">Home</a></li>
			      <li><a href="#">Page 1</a></li>
			      <li><a href="#">Page 2</a></li>
			    </ul>
			    <form onSubmit={this.handleWeather} className="navbar-form navbar-left" action="/action_page.php">
			      <div className="form-group">
			        <input id="weather-input" type="text" className="form-control" placeholder="Search for weather" />
			      </div>
			      <button type="submit" className="btn btn-default">Submit</button>
			    </form>
			    <form onSubmit={this.handleStocks} className="navbar-form navbar-left" action="/action_page.php">
			      <div className="form-group">
			        <input id="stock-input" type="text" className="form-control" placeholder="Search for stock" />
			      </div>
			      <button type="submit" className="btn btn-default">Submit</button>
			    </form>

			  </div>
			</nav>            
        )        
    }
} 

export default SearchBar;