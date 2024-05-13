import React from 'react'

import Tracks from './tracks.json';

function Quickjump(props) {

  const createGroups = (arr, numGroups) => {
    const perGroup = Math.ceil(arr.length / numGroups);
    return new Array(numGroups)
      .fill('')
      .map((_, i) => arr.slice(i * perGroup, (i + 1) * perGroup));
  }

  return (
    <quick-jump>
      {createGroups(Tracks, 4).map(track_group => (
        <div className="row mb-2">
          {track_group.map(track => (
            <a href={'#' + track} className="col">
              <img src={track.image_url} className='img-fluid' />
            </a>
          ))}
        </div>
      ))}
    </quick-jump>
  )
}

export default Quickjump



