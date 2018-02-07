import React, { Component } from 'react';
import '../css/Nav.css';

class Nav extends Component{
	render(){
		return(
	    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" id = "mainNav">
	      <div class="container">
	        <a class="navbar-brand" href="#">foodberg</a>
	        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
	          <span class="navbar-toggler-icon"></span>
	        </button>
	        <div class="collapse navbar-collapse" id="navbarResponsive">
	          <ul class="navbar-nav ml-auto">
	            <li class="nav-item">
	              <a class="nav-link" href="#">About</a>
	            </li>
	            <li class="nav-item">
	              <a class="nav-link" href="#">Contact</a>
	            </li>
	          </ul>
	        </div>
	      </div>
	    </nav>
		);
	}
}

export default Nav;