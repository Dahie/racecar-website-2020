import React from 'react'

function TirePressure(props) {
  return (
    <>
      <tr>
        <th rowspan="2">{props.track_temperature}</th>
        <td>{props.psi[0]}</td>
        <td>{props.psi[1]}</td>
      </tr>
      <tr>
        <td>{props.psi[2]}</td>
        <td>{props.psi[3]}</td>
      </tr>
    </>
  )
}

export default TirePressure;
