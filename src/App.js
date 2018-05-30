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
      <div className= "info27">
      <p>
      The 27 Club is a list of popular musicians, artists or actors that have died at age twenty seven, often as a result of drug and alcohol 
      abuse, or violent means such as homicide, suicide, or transportation-related accidents. The deaths of several twenty-seven-year-old 
      popular musicians between 1969 and 1971 led to the belief that deaths are more common at this age. The "club" has been repeatedly cited 
      in music magazines, journals and the daily press. Several exhibitions have been devoted to the idea, as well as novels, films and stage
       plays. There have been many different theories and speculations about the causes of such early deaths and their possible connections. 
       Cobain and Hendrix biographer Charles R. Cross wrote, four years before the BMJ study was published, "The number of musicians who died
        at 27 is truly remarkable by any standard. Although humans die regularly at all ages, there is a statistical spike for musicians who 
        die at 27."
        </p>
        </div>
        
        <Route exact path="/" render={()=><SongsList songs={songs} msg={'this is how we pass props in react router'}/>}/>
        <Route path='/:songId'render={()=><SongDetails component= {SongDetails} msg={'this is how we pass props in react router'}/>}/>


      
    
  
      </div>
    );
  }
}


export default App;
