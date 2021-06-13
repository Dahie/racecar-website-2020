import React from 'react'

import EngineMaps from './EngineMaps'
import LapTime from './LapTime'
import TirePressures from './TirePressures'

function Track(props) {
  const circuit_image_path = `/assets/images/trackmaps/${props.reference}.png`

  return (
    <div className="card" id="{props.reference}">
      <div className="card-header">{props.name}</div>
      <div className="row no-gutters">
        <div className="col-md-6">
          <a href={circuit_image_path} data-lightbox="trackmaps">
            <img src={circuit_image_path} className="img-fluid" />
          </a>
          <div className="card-body">
            <p className="card-text">Settings based on Coach-Dave-Academy Race-Setup</p>
          </div>
          <ul className="list-group list-group-flush">
            {props.links.map(entry => (
              <li key={entry.url} className="list-group-item">
                <a href={entry.url}>{entry.title}</a>
              </li>
            ))}
            <li className="list-group-item">
              <table className="table">
                <tbody>
                  {props.reference_lap_times.map(entry => (
                    <tr key={entry.category}>
                      <th>{entry.category}</th>
                      <td>{entry.lap_time}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </li>
            <li className="list-group-item">
              <table className="table">
                <tbody>
                  <tr>
                    <th>Pitlane Delta</th>
                    <td>{props.pitlane_delta}s</td>
                  </tr>
                </tbody>
              </table>
            </li>
          </ul>
        </div>
        <div className="col-md-6">
          <div className="card-body">
            {props.setups.map(setup => (
              <car-setup-list key={setup.driver_id}>
                <h3>{setup.driver_id}</h3>

                {setup.cars.map(car => (
                  <car-setup>
                    <h4>{car.name}</h4>
                    <table className="table">
                      <thead>
                        <tr>
                          <th></th>
                          <th>Dry (<LapTime duration={car.lap_time} />)</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th>Fuel consumption</th>
                          <td><EngineMaps maps={car.fuel_map} /></td>
                        </tr>

                        <tr>
                          <th>Tire Pressures</th>
                          <td>
                            <TirePressures tire_pressures={car.tire_pressures} />
                          </td>
                        </tr>

                        <tr>
                          <th>Brake Material</th>
                          <td>
                            <table class="table table-bordered table-sm">
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
                ))}
              </car-setup-list>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Track;
