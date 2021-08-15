import React from 'react'

function EngineMaps(props) {
  return (
    <table className="table table-bordered table-sm">
      <tbody>
      {props.maps && Object.entries(props.maps).map(k => (
          <tr key={k[0]}>
            <th>{k[0]}</th>
            <td>{k[1]}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default EngineMaps;
