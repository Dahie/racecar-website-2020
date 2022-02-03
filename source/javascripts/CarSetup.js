import React from 'react'

import EngineMaps from './EngineMaps'
import LapTime from './LapTime'
import TirePressures from './TirePressures'

function CarSetup(props) {
  return (
    <car-setup key={props.car.name}>
      <h4>{props.car.name}</h4>
      <table className="table">
        <thead>
          <tr>
            <th></th>
            <th>Dry (<LapTime duration={props.car.lap_time} />)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>Fuel consumption</th>
            <td><EngineMaps maps={props.car.fuel_map} /></td>
          </tr>

          <tr>
            <th>Tire Pressures</th>
            <td>
              <TirePressures tire_pressures={props.car.tire_pressures} />
            </td>
          </tr>

          <tr>
            <th>Brake Material</th>
            <td>
              <table className="table table-bordered table-sm">
                <tbody>
                  <tr>
                    <th>Sprint race (&lt;2h)</th>
                    <td>1</td>
                  </tr>
                  <tr>
                    <th>Endurance race (&gt;2h)</th>
                    <td>2</td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        </tbody>
      </table>
    </car-setup>
  )
}

export default CarSetup;
