import React from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import { robots } from './robots';
//STATE is an object that describe the application

const state = {
  robots: robots,
  searchfield: ''
}

export class App extends React.Component {
  render() {
    return (
      <div className='tc'>
        <h1>RoboFriends</h1>
        <SearchBox />
        <CardList robots={ robots }/>
      </div>
    )
  }
}

export default App
