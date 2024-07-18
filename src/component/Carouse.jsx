import React from "react";
import '../App.css';
import img1 from '../asset/image/post-item1.jpg';
import img2 from '../asset/image/post-item2.jpg';

function Carouse() {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md px-0">
            <div
              id="carouselExampleControls"
              className="carousel slide"
              data-ride="carousel"
            >
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img src={img1} className="d-block w-100 ht-75" alt="..." />
                </div>
                <div className="carousel-item">
                  <img src={img2} className="d-block w-100 ht-75" alt="..." />
                </div>

              </div>
              <a
                className="carousel-control-prev"
                href="#carouselExampleControls"
                role="button"
                data-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="sr-only">Previous</span>
              </a>
              <a
                className="carousel-control-next"
                href="#carouselExampleControls"
                role="button"
                data-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="sr-only">Next</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Carouse;
