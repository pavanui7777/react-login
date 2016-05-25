import React, { Component } from 'react';
import {render} from 'react-dom';
import {browserHistory, Router, Route, Link } from 'react-router'
import Pavan from './Pavan';
import Login from './Login';
import Success from './Success';
import Error from './Error'; 

class App extends Component {
	
	inputChangedOne(e) {
		this.setState({
			'firstName':e.target.value
		})
	}
	inputChangedTwo(e) {
		this.setState({
			'secondName':e.target.value
		})
	}
	handleClick() {
  		if(this.state.firstName === 'Jon' && this.state.secondName === 'Snow') {
  			console.log("Logged In");
  			browserHistory.push('/success')
  		} else {
  			console.log("Error");
  			browserHistory.push('/error');
  		}
  	}	
  	render(){
    	return (
      	<div>
      		<Login handleClick={this.handleClick.bind(this)} 
      		inputChangedOne={this.inputChangedOne.bind(this)} 
      		inputChangedTwo={this.inputChangedTwo.bind(this)}/>
      	</div>	
    	);
 	}
}

render((
  <Router history={browserHistory}>
    <Route path="/" component={App}/>
    <Route path="/success" component={Success}/>
    <Route path="/error" component={Error}/>
  </Router>
), document.getElementById('root'))