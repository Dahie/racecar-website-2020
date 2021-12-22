import React, { Component } from 'react'

import CarSetup from './CarSetup'


class Track extends Component {
  constructor(props) {
    super(props);

    this.state = {
        image: ""
    };
  }

  componentWillMount() {
    this.state.image = require('./track_maps/' + this.props.reference + '.png').default;
    console.log(this.state.image);
  }

  render () {
    return(<div id={this.props.reference} className="card mb-3">
      <div className="card-header">{this.props.name}</div>
      <div className="row no-gutters">
        <div className="col-md-6">
          <a href={this.state.image} data-lightbox="trackmaps">
            <img src={this.state.image} className="img-fluid" />
          </a>
          <div className="card-body">
            <p className="card-text">Settings based on Coach-Dave-Academy Race-Setup</p>
          </div>
          <ul className="list-group list-group-flush">
            {this.props.links.map(entry => (
              <li key={entry.url} className="list-group-item">
                <a href={entry.url}>{entry.title}</a>
              </li>
            ))}
            <li className="list-group-item">
              <table className="table">
                <tbody>
                  {this.props.reference_lap_times.map(entry => (
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
                    <td>{this.props.pitlane_delta}s</td>
                  </tr>
                </tbody>
              </table>
            </li>
          </ul>
        </div>
        <div className="col-md-6">
          <div className="card-body">

            <ul class="nav nav-pills">

              {this.props.setups.map(setup => (
                <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">{setup.driver_id}</a>
                  <div class="dropdown-menu">
                    {setup.cars.map(car => (
                      <a class="dropdown-item" href="#">{car.name}</a>
                    ))}
                  </div>
                </li>
              ))}
            </ul>


            {this.props.setups.map(setup => (
              <div class="tab-content">
                <car-setup-list key={setup.driver_id}>
                  {setup.cars.map(car => (
                    <div class="tab-pane" id={car.name} role="tabpanel">
                      <CarSetup car={car} />
                    </div>
                  ))}
                </car-setup-list>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>)
  }
}

export default Track;
