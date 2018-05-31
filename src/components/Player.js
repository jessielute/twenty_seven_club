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

    }
    //play song function

    PlaySong =()=> {
        this.setState({
            playing: true,
        });
        this.AudioPlayer.current.play();
    }


    //pause song function
    PauseSong = () => {
        this.setState({ playing: false });
        this.AudioPlayer.current.pause();
    }

    ///rewind function
    RewindSong = () => {
        let previousSong;
        if (this.state.currentSong === 0) {
            previousSong = this.props.songs.length - 1;
        } else {
            previousSong = (this.state.currentSong) -1;
        }
        this.setState({ currentSong: previousSong })
    };



    //skip function
    SkipSong = () => {
        let nextSong;
        if (this.state.currentSong === this.props.songs.length -1) {
            nextSong = 0;
        } else {
            nextSong = (this.state.currentSong) +1
        }
        this.setState({ currentSong: nextSong })
    };

//title of playing song DOES NOT YET WORK. 
//the player lives here
    render() {

        return (
            <div>
                <label htmlFor="song name">
                    
                    <h2>{this.props.title}</h2>

                   </label>
                <br />
                <audio
                    ref={this.AudioPlayer}
                  
                    src={this.props.songs[this.state.currentSong].file} >
                </audio>

                <button name="rewind" id="rewind" onClick={this.RewindSong}><img src={`${process.env.PUBLIC_URL}/icons/rewindicon.svg`} /></button>
                <button name="play" id="play" onClick={this.PlaySong}><img src={`${process.env.PUBLIC_URL}/icons/playicon.svg`} /></button>
                <button name="pause" id="pause" onClick={this.PauseSong}><img src={`${process.env.PUBLIC_URL}/icons/pauseicon.svg`} /></button>
                <button name="forward" id="forward" onClick={this.SkipSong}><img src={`${process.env.PUBLIC_URL}/icons/skipicon.svg`} /></button>
                <Route path='/:songId'render={(props)=><SongDetails {...props}songs={this.props.songs} PlaySong={this.PlaySong} />}/>
                <Route exact path="/" render={(props)=><SongsList {...props} PlaySong={this.PlaySong} songs={this.props.songs} />}/>
            </div>
        );
    }
}




export default Player