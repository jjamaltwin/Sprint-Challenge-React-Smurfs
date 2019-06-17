import React, { Component } from 'react';
import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import {Route, NavLink} from 'react-router-dom';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
    };
  }

  render() {
    return (
      <div className="App">
          <nav>
       <NavLink  className='selectedLink-left' to='/smurf-form'>Add A Smurf</NavLink>
            <NavLink  className='selectedLink-right' exact to='/'>Smurf Village</NavLink>
      </nav>
      <Route exact path="/" component={Smurfs} />
        <Route path="/smurf-form" component={SmurfForm} />


      </div>
    );
  }
}

export default App;
