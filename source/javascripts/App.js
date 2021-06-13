import React from 'react'

import FuelCalculator from './FuelCalculator'
import TrackGuide from './TrackGuide'

function App() {
  return (
<div className={`react-root`}>
  <section id="#fuel">
    <div className="container content-section">
      <h3 className="text-center">Fuel calculation</h3>
      <FuelCalculator />
    </div>
  </section>

  <section id="#tracks">
    <div className="container content-section">
      <h3 className="text-center">Tracks</h3>
      <TrackGuide />
    </div>
  </section>
</div>
  )
}

export default App;
