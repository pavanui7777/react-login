import React, { Component } from 'react';
import {render} from 'react-dom';
import Pavan from './Pavan';

class Login extends Component {
  
  render(){
    return (
      <div className="login">
      	{'username :'}<Pavan inputChanged={this.props.inputChangedOne}/>
      	{'password :'}<Pavan inputChanged={this.props.inputChangedTwo}/>
      	<input type="button" value="login" onClick={this.props.handleClick}/>
      </div>	
    );
  }
}

export default Login