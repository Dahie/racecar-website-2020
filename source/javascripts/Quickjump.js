import React from 'react'

const tracks = ["barcelona", "brands_hatch", "donington", "hungaroring", "imola", "indianapolis", "kyalami", "laguna_seca", "misano", "monza", "mount_panorama", "nurburgring", "oulton_park", "paul_ricard", "silverstone", "snetterton", "spa", "suzuka", "zandvoort", "zolder"];

function Quickjump(props) {

  const createGroups = (arr, numGroups) => {
    const perGroup = Math.ceil(arr.length / numGroups);
    return new Array(numGroups)
      .fill('')
      .map((_, i) => arr.slice(i * perGroup, (i + 1) * perGroup));
  }

  return (
    <quick-jump>
      {createGroups(tracks, 4).map(track_group => (
        <div className="row mb-2">
          {track_group.map(track => (
            <a href={'#' + track} className="col">
              <img src={"/assets/images/track_maps/" + track + ".png"} className='img-fluid' />
            </a>
          ))}
        </div>
      ))}
    </quick-jump>
  )
}

export default Quickjump



