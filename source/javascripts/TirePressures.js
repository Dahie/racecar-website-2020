import React from 'react'

import TirePressure from './TirePressure'

function TirePressures(props) {
  return (
    <table className="table table-bordered table-sm">
      <tbody>
        {props.tire_pressures && Object.entries(props.tire_pressures).map((k) => (
          <TirePressure track_temperature={k[0]} psi={k[1]} />
        ))}
      </tbody>
    </table>
  )
}

export default TirePressures;
