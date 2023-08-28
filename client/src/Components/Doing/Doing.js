import React from 'react'

const Doing = () => {
  return (
    <div className="container">
      <table className="table mt-5">
        <thead className="thead-dark conatiner" style={{ fontSize: 20 }}>
          <tr>
            <th scope="col">S.No</th>
            <th scope="col">Title</th>
            <th scope="col">Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th th scope="row">
              1
            </th>
            <td>Mark</td>
            <td>Otto</td>

          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Larry</td>
            <td>the Bird</td>

          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Doing;
