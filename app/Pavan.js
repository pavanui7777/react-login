import React, { Component } from 'react';
import {render} from 'react-dom';

class Pavan extends Component {
  render(){
    return (
      <input type="text" onChange={this.props.inputChanged}/>
    );
  }
}

export default Pavan