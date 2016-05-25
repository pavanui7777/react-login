import React, { Component } from 'react';
import {render} from 'react-dom';
import {Link} from 'react-router';

class Error extends Component {
  render(){
    return (
      <h1>Error Page
      {' '}
      <li><Link to={"/"}>Go back</Link></li></h1>	
    );
  }
}

export default Error