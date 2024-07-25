import React from "react";

function DashboardContent() {
  return (
    <>
      <div className="container mt-3">
        <div className="row">
          <div className="col-md-8 mx-auto">
            <h4 className="my-3 bg-green1 py-3 text-center text-light">User Dashboard</h4>
          <div className="card card-body shadow">
            <div className="row">

              <div className="col-md-4">
                <div className="card card-body">
                  <h4 className="text-center bg-green2 p-3">01</h4>
                  <a href="/rooms" className="btn bg-red text-light">Manage Rooms</a>
                </div>
              </div>

              <div className="col-md-4">
                <div className="card card-body">
                  <h4 className="text-center bg-green2 p-3">05</h4>
                  <a href="/bookings" className="btn bg-red text-light">Manage Booking</a>
                </div>
              </div>

              <div className="col-md-4">
                <div className="card card-body">
                  <h4 className="text-center bg-green2 p-3">02</h4>
                  <a href="/" className="btn bg-red text-light">Manage Profile</a>
                </div>
              </div>

            </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DashboardContent;
