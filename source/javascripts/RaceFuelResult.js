import React from 'react'

function FuelRaceResult(props) {
  return (<tr>
            <th>{props.duration} min</th>
            <td>
              {props.fuel} l
            </td>
            <td>
              {props.laps} laps
            </td>
          </tr>
  )
}

export default FuelRaceResult