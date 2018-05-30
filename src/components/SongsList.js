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
                    to={`/songDetails/${index}`}>
                    <p>{song.title}</p>
                    <button onClick={() => this.props.PlaySong(index)}>Play</button>
                    {song.artist}
                </Link>
        </li> )
        })

        return (
            <div className="SongsList-container">
                <h1> Listen </h1>
                <div>
                    <ul>
                        {allTitlesArray}
                    </ul>
                </div>
            </div>
        )
    }
}

export default SongsList;