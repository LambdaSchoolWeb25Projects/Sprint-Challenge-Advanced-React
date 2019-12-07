//Create a class component to fetch data https://googletrends.github.io/data/
// http://localhost:5000/api/players
//Display player data
//Build a custom hook (using localStorage or darkMode)
//Write 3-5 tests that sufficiently test the user experience

import React from 'react';
import axios from 'axios';
import Sheroes from './components/Sheroes';
import Card from './components/Card';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      players: []
    };
  }

  componentDidMount(){
    console.log('cDM is running')
    axios
      .get('http://localhost:5000/api/players')
      .then(res => this.setState({
        players: res.data
      }))
      .catch(err => console.log('players error', err))
  }

  render() {
    console.log('rendering App component');
    return (
      <div className="App">
        <h1>Women's World Cup Players</h1> 
        <Sheroes />
        <Card player={this.state.players} name={this.state.name} country={this.state.country} />
    </div>
    );
  }
}

export default App;
