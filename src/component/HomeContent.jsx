import React from "react";
import img1 from "../asset/image/hotel (1).jpg";
import img2 from "../asset/image/hotel (2).jpg";
import img3 from "../asset/image/hotel-4.jpg";

function HomeContent() {
  return (
    <>
      <div className="container my-5">
        <h5>Recent Products</h5>

        <div className="card card-body w-100 shadow mb-4">
          <div className="row">
            <div className="col-md-3">
              <img src={img1} className="w-100 h-100" alt="..." />
            </div>
            <div className="col-md-7">
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <p><strong>Price : </strong> $800</p>
              </div>
            </div>
            <div className="col-md-2 my-auto w-100">
              <a href="/" className="btn bg-red text-light">
                View Booking
              </a>
            </div>
          </div>
        </div>

        <div className="card card-body w-100 shadow mb-4">
          <div className="row">
            <div className="col-md-3">
              <img src={img2} className="w-100 h-100" alt="..." />
            </div>
            <div className="col-md-7">
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <p><strong>Price : </strong> $800</p>
              </div>
            </div>
            <div className="col-md-2 my-auto w-100">
              <a href="/" className="btn bg-red text-light">
                View Booking
              </a>
            </div>
          </div>
        </div>

        <div className="card card-body w-100 shadow mb-4">
          <div className="row">
            <div className="col-md-3">
              <img src={img3} className="w-100 h-100" alt="..." />
            </div>
            <div className="col-md-7">
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <p><strong>Price : </strong> $800</p>
              </div>
            </div>
            <div className="col-md-2 my-auto w-100">
              <a href="/" className="btn bg-red text-light">
                View Booking
              </a>
            </div>
          </div>
        </div>

      </div>
    </>
  );
}

export default HomeContent;
