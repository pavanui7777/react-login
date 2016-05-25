import React, { Component } from 'react';
import {render} from 'react-dom';
import {Link} from 'react-router';
 
class Success extends Component {
  render(){
    return (
      <h1>Success Page {' '}
      <li><Link to={"/"}>Go back</Link></li></h1>	
    );
  }
}

export default Success