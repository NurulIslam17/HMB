import React from "react";

function RoomList() {
  return (
    <>
      <div className="container my-3">
        <div className="row">
          <div className="col-md-8 mx-auto">
            <h4 className="text-center py-2">All Rooms</h4>
            <div className="d-flex justify-content-between border rounded-0 p-2">
              <div>
                <select
                  className="form-select form-control"
                  aria-label="Default select example"
                >
                  <option>Category wise room select</option>
                  <option>General</option>
                  <option>Popular</option>
                  <option>Classic</option>
                </select>
              </div>
              <a href="/add-room" className="btn btn-outline-success">
                Add
              </a>
            </div>

            <table className="table table-bordered table-striped">
              <thead>
                <tr>
                  <th scope="col">SL</th>
                  <th scope="col">Customer</th>
                  <th scope="col">Room</th>
                  <th scope="col">From</th>
                  <th scope="col">To</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>Otto</td>
                  <td>Otto</td>
                  <td>
                    <a href="/" className="btn btn-danger me-3">
                      Delete
                    </a>
                    <a href="/" className="btn btn-success">
                      Edit
                    </a>
                  </td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>Thornton</td>
                  <td>Thornton</td>
                  <td>
                    <a href="/" className="btn btn-danger me-3">
                      Delete
                    </a>
                    <a href="/" className="btn btn-success">
                      Edit
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default RoomList;
