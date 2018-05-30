import React, {Component} from 'react';
import { Link, Route, Switch } from 'react-router-dom';

class SongDetails extends Component {
    render() {
        const { match } = this.props;
        console.log(this.props)
        return (
            <div>
                <h2>{this.props.songs.deadStar}</h2>
                <p>{this.props.songs.bio}</p>
            </div>
        )
    }
}

export default SongDetails;