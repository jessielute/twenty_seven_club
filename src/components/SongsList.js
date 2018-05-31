import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import SongDetails from './SongDetails';


class SongsList extends Component {

    render() {
        const { match } = this.props;
        const allTitlesArray = this.props.songs.map((song, index) => {
            return ( 
               
            <li key={index}>
                <Link
                    to={`/${index}`}>
                    <button className= "play-button-2"onClick={() => this.props.PlaySong(index)}><img src={`${process.env.PUBLIC_URL}/icons/play-circle-outline.png`} /></button>
                    <p>{song.title}</p>
                    
                    {song.artist}
                </Link>
        </li> )
  
        })

        return (
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
        
            <div className="SongsList-container">
                <h1> Listen </h1>
                <div className= "box-o-songs">
                    <ul>
                        {allTitlesArray}
                    </ul>
                </div>
            </div>
            </div>
        )
    }
}

export default SongsList;