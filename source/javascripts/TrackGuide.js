import React, { Component } from 'react'

import Track from './Track'
import Tracks from "./tracks.json";

class TrackGuide extends Component {
  render() {
    return (
      <track-list className='row'>
        {Tracks.map(track => (
          <Track key={track.reference} {...track} />
        ))}
      </track-list>
    )
  }
}

export default TrackGuide;
