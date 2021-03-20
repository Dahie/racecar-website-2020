import React from 'react'

function FuelRaceResult(props) {
  return (<tr>
            <th>{props.duration} min</th>
            <td>
              <strong>{props.fuel} l</strong>
            </td>
            <td>
              <span>{props.laps} laps</span>
            </td>
          </tr>
  )
}

export default FuelRaceResult