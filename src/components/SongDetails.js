import React, {Component} from 'react';
import { Link, Route, Switch } from 'react-router-dom';


class SongDetails extends Component {
    render() {
        const { match } = this.props;
        let songId = match.params.songId
        console.log(this.props)
        return (
            <div>
            <button name="home" id="home" onClick= {() => './'}><img src={`${process.env.PUBLIC_URL}/icons/home.png`} /></button>
                <h2>{this.props.songs[songId].deadStar}</h2>
                <p>{this.props.songs[songId].bio}</p>
            </div>
        )
    }
}

export default SongDetails;