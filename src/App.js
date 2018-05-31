import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import SongsList from './components/SongsList';
import SongDetails from './components/SongDetails';
import "./app.css";
import Player from "./components/Player";
import clubPic from "./clubpic.jpg"

class App extends Component {
  render() {
    let {songs} = this.props;
    return (
      <div className="App">
      <div className= "title"><h1>the twenty seven club</h1></div>
      <div className= "photo27">
      <img src={require('./clubpic2.jpg')} />
   </div>
   <Player songs={songs}/>
        
       
      </div>
    );
  }
}


export default App;
