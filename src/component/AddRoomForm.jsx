import React from "react";

function AddRoomForm() {
  return (
    <>
      <div className="container my-5">
        <div className="row">
          <div className="col-md-8 mx-auto">
            <h4 className="text-center">Add Room</h4>

            <div className="card card-body">
              <form>
                <div className="row">
                  <div className="col-md-4">
                    <div className="mb-3">
                      <label
                        htmlFor="exampleInputEmail1"
                        className="form-label"
                      >
                        Type
                      </label>
                      <select
                        className="form-select form-control"
                        aria-label="Default select example"
                      >
                        <option >Open this select menu</option>
                        <option >One</option>
                        <option >Two</option>
                        <option >Three</option>
                      </select>
                    </div>
                  </div>

                  <div className="col-md-4">
                    <div className="mb-3">
                      <label
                        htmlFor="exampleInputEmail1"
                        className="form-label"
                      >
                        Price
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="exampleInputEmail1"
                        placeholder="Ex: $200"
                        aria-describedby="emailHelp"
                      />
                    </div>
                  </div>

                  <div className="col-md-4">
                    <div className="mb-3">
                      <label
                        htmlFor="exampleInputEmail1"
                        className="form-label"
                      >
                        Photo
                      </label>
                      <input
                        type="file"
                        className=""
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                      />
                    </div>
                  </div>
                </div>

                <div className="row mb-3">
                  <div className="col-md-12">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                      Description
                    </label>
                    <textarea
                      name=""
                      className="form-control"
                      id=""
                      placeholder="Description here..."
                      cols="30"
                    ></textarea>
                  </div>
                </div>

                <button type="submit" className="btn btn-success me-5">
                  Submit
                </button>
                <a href="/rooms" className="btn btn-secondary ms-5" rel="noopener noreferrer">Back</a>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddRoomForm;
