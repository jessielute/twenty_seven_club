import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import "../app.css";

class SongDetails extends Component {
    render() {
        const { match } = this.props;
        let songId = match.params.songId
        console.log(this.props)
        return (
            <div>
                <Link to="/">
                    <button className="play-button-2">
                        <img src={`${process.env.PUBLIC_URL}./icons/home.png`} />
                    </button>
                </Link>
                <h2>{this.props.songs[songId].deadStar}</h2>
                <div className = "bio27">
                <p>{this.props.songs[songId].bio}</p>
                </div>
            </div>
        )
    }
}

export default SongDetails;