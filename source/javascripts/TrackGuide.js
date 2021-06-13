import React, { Component } from 'react'

import Track from './Track'
import Tracks from "./tracks.json";

class TrackGuide extends Component {
  render() {
    return (
      <track-list className='row'>
        {Tracks.map(track => (
          <div className="col-md-12">
            <Track key={track.reference} {...track} />
          </div>
        ))}
      </track-list>
    )
  }
}

export default TrackGuide;
