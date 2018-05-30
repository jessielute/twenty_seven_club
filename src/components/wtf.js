
import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import SongsList from './SongsList';
import SongDetails from './SongDetails';
import "../app.css";

class Player extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            playing: false,
            currentSong: 0,
        };
        this.AudioPlayer = React.createRef();
    };

    

    //play song function

    PlaySong =()=> {
        this.setState({
            playing: true,
        });
        this.AudioPlayer.current.play();
    }
    
    
    //pause song function
    PauseSong =(ref)=> {
        this.setState({ play: false, pause: true });
        this[ref].audio.pause();
    }

    //rewind function
    RewindSong =(ref)=> {
        let previousSong = (this.state.currentSong)-1;
        
        this.setState ({currentSong: previousSong})
    }

    //skip function
    SkipSong =(ref)=> {
        let nextSong = (this.state.currentSong)+1;
        this.setState ({currentSong: nextSong})
};

    render()  {

        return (
            <div>
            <label for="song name">
            Smells Like Teen Spirit by Nirvana
                   </label>
                   <br />
                   <audio 
                   ref={this.AudioPlayer}
                   id="someday i will have an ID"
                   controls
                   src= {this.props.songs[this.state.currentSong].source} >
                   </audio>
        
                <button name="rewind" id="rewind" onClick={() => this.RewindSong}><img src={`${process.env.PUBLIC_URL}/icons/rewindicon.svg`} /></button>
                <button name="play" id="play" onClick={this.PlaySong}><img src={`${process.env.PUBLIC_URL}/icons/playicon.svg`} /></button>
                <button name="pause" id="pause" onClick={() => this.PauseSong}><img src={`${process.env.PUBLIC_URL}/icons/pauseicon.svg`} /></button>
                <button name="forward" id="forward" onClick={() => this.SkipSong}><img src={`${process.env.PUBLIC_URL}/icons/skipicon.svg`} /></button>


            </div>
        );
    }
}




export default Player




////////////


    //rewind function
    RewindSong = (ref) => {
        if (this.state.currentSong === 0) {
            let previousSong = songs.length - 1
        }
        else {
            let previousSong = (this.state.currentSong) - 1;
        }
        this.setState({ currentSong: previousSong })
    }